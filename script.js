import { supabase } from "./supabase.js";

const loginBtn = document.getElementById("loginBtn");
const googleBtn = document.getElementById("googleBtn");
const guestBtn = document.getElementById("guestBtn");
const status = document.getElementById("status");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) status.innerText = error.message;
  else window.location.href = "dashboard.html";
});

googleBtn.addEventListener("click", async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google"
  });
});

guestBtn.addEventListener("click", async () => {
  // تسجيل دخول اختياري (Guest)
  const { error } = await supabase.auth.signInWithPassword({
    email: "guest@pulseai.com",
    password: "guest123"
  });

  if (error) status.innerText = error.message;
  else window.location.href = "dashboard.html";
});
