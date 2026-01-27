const guest = localStorage.getItem("guest");

if (!guest) {
  // لازم يكون مسجل دخول عشان يفتح Dashboard
  window.location.href = "index.html";
}

document.getElementById("logoutBtn").onclick = () => {
  localStorage.removeItem("guest");
  window.location.href = "index.html";
};

document.getElementById("analyzeBtn").onclick = async () => {
  const text = document.getElementById("todoText").value;

  const res = await fetch("YOUR_FUNCTION_URL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  const data = await res.json();
  document.getElementById("result").innerText =
    data.choices[0].message.content;
};
