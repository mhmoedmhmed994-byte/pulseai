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

    const data = await response.json();
    return data.text || "مفيش رد";
  }

  const button = document.getElementById("analyzeBtn");
  const input = document.getElementById("inputText");
  const result = document.getElementById("aiResult");

  button.onclick = async () => {
    const text = input.value.trim();

    if (!text) {
      alert("اكتب حاجة الأول");
      return;
    }

    result.innerText = "جارٍ التفكير...";

    try {
      const answer = await askAI(text);
      result.innerText = answer;
    } catch (err) {
      result.innerText = "حصل خطأ";
      console.error(err);
    }
  };

});
