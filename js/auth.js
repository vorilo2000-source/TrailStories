// =============================================================================
// auth.js — Supabase Authentication Module
// MyTrailWalks v1.0.0
// -----------------------------------------------------------------------------
// Gebaseerd op MyFamTreeCollab auth.js v2.5.2
// Vereenvoudigd voor MyTrailWalks: geen tiers, geen collab-functies.
// Enkel: login, register, logout, resetPassword, getProfile, is_admin check.
//
// ⚠️  CONFIGURATIE VEREIST:
//     Vervang SUPABASE_URL en SUPABASE_ANON met jouw MyTrailWalks projectwaarden.
//     Te vinden op: https://supabase.com/dashboard → jouw project → Settings → API
//
// Supabase tabel vereist:
//     profiles (
//       id uuid references auth.users primary key,
//       username text,
//       is_admin boolean default false,
//       created_at timestamptz default now()
//     )
//
// Dependencies: Supabase JS SDK (geladen via CDN vóór dit script)
// Load order:   auth.js → topbar.js → app.js → [pagina].js
// =============================================================================

(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // ⚠️  CONFIGURATIE — vervang deze waarden na aanmaken Supabase project
  // ---------------------------------------------------------------------------
  var SUPABASE_URL  = "JOUW_SUPABASE_URL";   // bv. https://abcdefgh.supabase.co
  var SUPABASE_ANON = "JOUW_ANON_KEY";       // bv. sb_publishable_...

  // ---------------------------------------------------------------------------
  // Supabase client
  // ---------------------------------------------------------------------------
  var _client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

  // ---------------------------------------------------------------------------
  // _errMsg(error)
  // Vertaalt Supabase foutmeldingen naar Nederlandse tekst.
  // ---------------------------------------------------------------------------
  function _errMsg(error) {
    if (!error) return null;
    var msg = error.message || "Onbekende fout";

    if (msg.includes("Invalid login credentials"))
      return "E-mailadres of wachtwoord onjuist.";
    if (msg.includes("Email not confirmed"))
      return "Bevestig eerst je e-mailadres via de ontvangen mail.";
    if (msg.includes("User already registered"))
      return "Dit e-mailadres is al in gebruik.";
    if (msg.includes("Password should be"))
      return "Wachtwoord moet minimaal 6 tekens bevatten.";
    if (msg.includes("Email rate limit exceeded"))
      return "Te veel pogingen. Probeer het later opnieuw.";
    return msg;
  }

  // ---------------------------------------------------------------------------
  // register(email, password, username)
  // ---------------------------------------------------------------------------
  async function register(email, password, username) {
    if (!email || !password || !username)
      return { user: null, error: "Vul alle velden in." };
    if (username.trim().length < 2)
      return { user: null, error: "Gebruikersnaam moet minimaal 2 tekens bevatten." };

    var result = await _client.auth.signUp({
      email: email,
      password: password,
      options: { data: { username: username.trim() } },
    });

    if (result.error) return { user: null, error: _errMsg(result.error) };
    return { user: result.data.user, error: null };
  }

  // ---------------------------------------------------------------------------
  // login(email, password)
  // ---------------------------------------------------------------------------
  async function login(email, password) {
    if (!email || !password)
      return { user: null, error: "Vul e-mailadres en wachtwoord in." };

    var result = await _client.auth.signInWithPassword({ email, password });

    if (result.error) return { user: null, error: _errMsg(result.error) };
    return { user: result.data.user, error: null };
  }

  // ---------------------------------------------------------------------------
  // logout()
  // ---------------------------------------------------------------------------
  async function logout() {
    var result = await _client.auth.signOut();
    return { error: _errMsg(result.error) };
  }

  // ---------------------------------------------------------------------------
  // resetPassword(email)
  // ---------------------------------------------------------------------------
  async function resetPassword(email) {
    if (!email) return { error: "Vul je e-mailadres in." };

    // ⚠️  Pas de redirectTo URL aan naar jouw GitHub Pages URL
    var result = await _client.auth.resetPasswordForEmail(email, {
      redirectTo: "https://JOUW_GITHUB_USERNAME.github.io/MyTrailWalks/reset.html",
    });

    if (result.error) return { error: _errMsg(result.error) };
    return { error: null };
  }

  // ---------------------------------------------------------------------------
  // updatePassword(newPassword)
  // ---------------------------------------------------------------------------
  async function updatePassword(newPassword) {
    if (!newPassword || newPassword.length < 6)
      return { error: "Wachtwoord moet minimaal 6 tekens bevatten." };

    var result = await _client.auth.updateUser({ password: newPassword });
    if (result.error) return { error: _errMsg(result.error) };
    return { error: null };
  }

  // ---------------------------------------------------------------------------
  // getSession()
  // ---------------------------------------------------------------------------
  async function getSession() {
    var result = await _client.auth.getSession();
    return result.data && result.data.session ? result.data.session : null;
  }

  // ---------------------------------------------------------------------------
  // getUser()
  // ---------------------------------------------------------------------------
  async function getUser() {
    var session = await getSession();
    return session ? session.user : null;
  }

  // ---------------------------------------------------------------------------
  // getProfile()
  // Haalt username en is_admin op uit de profiles tabel.
  // ---------------------------------------------------------------------------
  async function getProfile() {
    var user = await getUser();
    if (!user) return { profile: null, error: "Niet ingelogd." };

    var result = await _client
      .from("profiles")
      .select("username, is_admin")
      .eq("id", user.id)
      .single();

    if (result.error) return { profile: null, error: _errMsg(result.error) };
    return { profile: result.data, error: null };
  }

  // ---------------------------------------------------------------------------
  // onAuthChange(callback)
  // ---------------------------------------------------------------------------
  function onAuthChange(callback) {
    _client.auth.onAuthStateChange(function (event, session) {
      callback(event, session);
    });
  }

  // ---------------------------------------------------------------------------
  // getClient()
  // ---------------------------------------------------------------------------
  function getClient() {
    return _client;
  }

  // ---------------------------------------------------------------------------
  // Publieke API
  // ---------------------------------------------------------------------------
  window.AuthModule = {
    register,
    login,
    logout,
    resetPassword,
    updatePassword,
    getSession,
    getUser,
    getProfile,
    onAuthChange,
    getClient,
  };

})();
