async function askAI(prompt) {
  const res = await fetch("https://kiukgdrkctbtknimkpds.supabase.co/functions/v1/openai-analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  return data.text || "No response";
}

document.getElementById("analyzeBtn").onclick = async () => {
  const prompt = document.getElementById("inputText").value;

  if (!prompt.trim()) {
    alert("اكتب شيء أولاً");
    return;
  }

  document.getElementById("aiResult").innerText = "جارٍ التحليل...";

  const answer = await askAI(prompt);
  document.getElementById("aiResult").innerText = answer;
};
