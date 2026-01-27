const SUPABASE_URL = "https://YOUR-PROJECT-REF.supabase.co";
const SUPABASE_KEY = "YOUR_SUPABASE_ANON_KEY";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let lang = localStorage.getItem("lang") || "AR";

const text = {
  AR: {
    siteName: "Dashboard",
    analyze: "تحليل بواسطة AI",
    logout: "تسجيل خروج",
    placeholder: "اكتب هنا..."
  },
  EN: {
    siteName: "Dashboard",
    analyze: "Analyze with AI",
    logout: "Logout",
    placeholder: "Write here..."
  },
  CN: {
    siteName: "仪表板",
    analyze: "AI 分析",
    logout: "退出登录",
    placeholder: "在这里写..."
  }
};

function updateUI() {
  document.getElementById("siteName").innerText = text[lang].siteName;
  document.getElementById("analyzeBtn").innerText = text[lang].analyze;
  document.getElementById("logoutBtn").innerText = text[lang].logout;
  document.getElementById("todoText").placeholder = text[lang].placeholder;
}

updateUI();

document.getElementById("langBtn").onclick = () => {
  lang = lang === "AR" ? "EN" : lang === "EN" ? "CN" : "AR";
  localStorage.setItem("lang", lang);
  updateUI();
};

// حماية الصفحة
supabase.auth.getUser().then(({ data }) => {
  if (!data.user) {
    window.location.href = "index.html";
  }
});

// تسجيل خروج
document.getElementById("logoutBtn").onclick = async () => {
  await supabase.auth.signOut();
  window.location.href = "index.html";
};

// AI
document.getElementById("analyzeBtn").onclick = async () => {
  const textInput = document.getElementById("todoText").value;

  const res = await fetch("YOUR_FUNCTION_URL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: textInput }),
  });

  const data = await res.json();
  document.getElementById("result").innerText =
    data.choices[0].message.content;
};
