const SUPABASE_URL = "https://YOUR-PROJECT-REF.supabase.co";
const SUPABASE_KEY = "YOUR_SUPABASE_ANON_KEY";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const email = document.getElementById("email");
const password = document.getElementById("password");
const msg = document.getElementById("msg");

document.getElementById("loginBtn").onclick = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) msg.innerText = error.message;
  else window.location.href = "dashboard.html";
};

document.getElementById("signupBtn").onclick = async () => {
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (error) msg.innerText = error.message;
  else msg.innerText = "تم إنشاء الحساب! تأكد من بريدك.";
};

document.getElementById("guestBtn").onclick = () => {
  localStorage.setItem("guest", "true");
  window.location.href = "dashboard.html";
};

document.getElementById("forgotBtn").onclick = async () => {
  const { error } = await supabase.auth.resetPasswordForEmail(email.value);

  if (error) msg.innerText = error.message;
  else msg.innerText = "تم إرسال رابط تغيير كلمة المرور!";
};
