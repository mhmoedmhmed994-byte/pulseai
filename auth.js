import { supabase } from "./supabase.js";

export async function login(email, password) {
  return await supabase.auth.signInWithPassword({ email, password });
}

export async function signup(email, password) {
  return await supabase.auth.signUp({ email, password });
}

export async function googleLogin() {
  return await supabase.auth.signInWithOAuth({ provider: "google" });
}

export function guestLogin() {
  localStorage.setItem("guest", "true");
  window.location.href = "dashboard.html";
}
