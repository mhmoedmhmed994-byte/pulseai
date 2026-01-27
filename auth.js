const SUPABASE_URL = "https://YOUR-PROJECT-REF.supabase.co";
const SUPABASE_KEY = "YOUR_SUPABASE_ANON_KEY";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let lang = localStorage.getItem("lang") || "AR";

const text = {
  AR: {
    siteName: "PulseAI",
    login: "تسجيل الدخول",
    signup: "إنشاء حساب",
    forgot: "نسيت كلمة المرور",
    email: "Email",
    password: "Password",
    msg1: "تم إنشاء الحساب! تأكد من بريدك.",
    msg2: "تم إرسال رابط تغيير كلمة المرور!"
  },
  EN: {
    siteName: "PulseAI",
    login: "Login",
    signup: "Sign Up",
    forgot: "Forgot Password",
    email: "Email",
    password: "Password",
    msg1: "Account created! Check your email.",
    msg2: "Password reset link sent!"
  },
  CN: {
    siteName: "PulseAI",
    login: "登录",
    signup: "注册",
    forgot: "忘记密码",
    email: "邮箱",
    password: "密码",
    msg1: "账户已创建！请检查你的邮箱。",
    msg2: "已发送重置密码链接！"
  }
};

function updateUI() {
  document.getElementById("siteName").innerText = text[lang].siteName;
  document.getElementById("loginBtn").innerText = text[lang].login;
  document.getElementById("signupBtn").innerText = text[lang].signup;
  document.getElementById("forgotBtn").innerText = text[lang].forgot;

  document.getElementById("email").placeholder = text[lang].email;
  document.getElementById("password").placeholder = text[lang].password;
}

updateUI();

document.getElementById("langBtn").onclick = () => {
  lang = lang === "AR" ? "EN" : lang === "EN" ? "CN" : "AR";
  localStorage.setItem("lang", lang);
  updateUI();
};

// تسجيل الدخول
document.getElementById("loginBtn").onclick = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  });

  if (error) document.getElementById("msg").innerText = error.message;
  else window.location.href = "dashboard.html";
};

// إنشاء حساب
document.getElementById("signupBtn").onclick = async () => {
  const { error } = await supabase.auth.signUp({
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  });

  if (error) document.getElementById("msg").innerText = error.message;
  else document.getElementById("msg").innerText = text[lang].msg1;
};

// نسيت كلمة المرور
document.getElementById("forgotBtn").onclick = async () => {
  const { error } = await supabase.auth.resetPasswordForEmail(document.getElementById("email").value);

  if (error) document.getElementById("msg").innerText = error.message;
  else document.getElementById("msg").innerText = text[lang].msg2;
};
