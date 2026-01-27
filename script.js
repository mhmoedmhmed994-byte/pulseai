document.addEventListener("DOMContentLoaded", () => {

  async function askAI(prompt) {
    const response = await fetch(
      "https://kiukgdrkctbtknimkpds.supabase.co/functions/v1/openai-analyze",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      }
    );

    const text = await response.text();
    console.log("RAW RESPONSE:", text);

    try {
      return JSON.parse(text).text;
    } catch {
      return text;
    }
  }

  document.getElementById("analyzeBtn").onclick = async () => {
    const input = document.getElementById("inputText").value.trim();
    const result = document.getElementById("aiResult");

    if (!input) {
      alert("اكتب حاجة الأول");
      return;
    }

    result.innerText = "جارٍ التفكير...";

    const answer = await askAI(input);
    result.innerText = answer || "مفيش رد";
  };

});
