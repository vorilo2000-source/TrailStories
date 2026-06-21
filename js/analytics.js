// analytics.js v1.1.0
// MyTrailWalks — Supabase analytics tracker
// Tracks: page views, session duration, returning visitors
// Wijziging v1.1.0: wacht op window._supabase via retry loop
//   zodat auth.js zeker geladen is voor de insert uitgevoerd wordt.

(function () {
  // ── Helpers ──────────────────────────────────────────────────────────────

  function getOrCreateSessionId() {
    let sid = sessionStorage.getItem('myw_session_id');
    if (!sid) {
      sid = crypto.randomUUID();
      sessionStorage.setItem('myw_session_id', sid);
    }
    return sid;
  }

  function getPagePath() {
    return window.location.pathname + window.location.search;
  }

  // ── Wacht tot window._supabase beschikbaar is ─────────────────────────────
  function waitForSupabase(maxMs) {
    return new Promise((resolve, reject) => {
      if (window._supabase) { resolve(window._supabase); return; }
      const interval = 50;
      let elapsed = 0;
      const timer = setInterval(() => {
        if (window._supabase) {
          clearInterval(timer);
          resolve(window._supabase);
        } else {
          elapsed += interval;
          if (elapsed >= maxMs) {
            clearInterval(timer);
            reject(new Error('_supabase niet beschikbaar na ' + maxMs + 'ms'));
          }
        }
      }, interval);
    });
  }

  // ── State ─────────────────────────────────────────────────────────────────

  let viewId    = null;
  let enteredAt = new Date().toISOString();
  const sessionId = getOrCreateSessionId();
  const pagePath  = getPagePath();

  // ── Insert page view on load ──────────────────────────────────────────────

  async function insertPageView() {
    let client;
    try {
      client = await waitForSupabase(3000);
    } catch (e) {
      console.warn('[analytics] Supabase niet beschikbaar:', e.message);
      return;
    }

    const { data: sessionData } = await client.auth.getSession();
    const userId = sessionData?.session?.user?.id ?? null;

    const { data, error } = await client
      .from('page_views')
      .insert({
        page_path:   pagePath,
        user_id:     userId,
        session_id:  sessionId,
        entered_at:  enteredAt,
      })
      .select('id')
      .single();

    if (error) {
      console.warn('[analytics] insert fout:', error.message);
      return;
    }

    viewId = data.id;
  }

  // ── Update duration on page exit ─────────────────────────────────────────

  async function updateDuration() {
    if (!viewId || !window._supabase) return;

    const exitedAt = new Date().toISOString();
    const durationSeconds = Math.round(
      (new Date(exitedAt) - new Date(enteredAt)) / 1000
    );

    await window._supabase
      .from('page_views')
      .update({
        exited_at:        exitedAt,
        duration_seconds: durationSeconds,
      })
      .eq('id', viewId);
  }

  // ── Visibility change ─────────────────────────────────────────────────────

  document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'hidden') {
      await updateDuration();
    }
  });

  // ── Beforeunload fallback ─────────────────────────────────────────────────

  window.addEventListener('beforeunload', () => {
    if (!viewId || !window._supabase) return;
    updateDuration();
  });

  // ── Init ─────────────────────────────────────────────────────────────────

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertPageView);
  } else {
    insertPageView();
  }

})();
