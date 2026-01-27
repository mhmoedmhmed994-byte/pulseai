document.getElementById("loginBtn").onclick = () => {
  // بعد ما يضغط Login يروح لل Dashboard
  window.location.href = "dashboard.html";
};

document.getElementById("googleBtn").onclick = () => {
  alert("Google login clicked");
};

document.getElementById("guestBtn").onclick = () => {
  window.location.href = "dashboard.html";
};
