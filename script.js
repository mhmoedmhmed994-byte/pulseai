let langIndex = 0;
let sectionIndex = 0;

const languages = [
  {
    code: "AR",
    title: ["تحليل الأعراض الصحية", "تحليل التغذية", "تحليل اللياقة"],
    desc: [
      "اكتب الأعراض اللي حاسس بيها.",
      "اكتب نظامك الغذائي.",
      "اكتب نشاطك البدني."
    ]
  },
  {
    code: "EN",
    title: ["Symptom Analysis", "Nutrition Analysis", "Fitness Analysis"],
    desc: [
      "Describe your symptoms.",
      "Describe your diet.",
      "Describe your physical activity."
    ]
  },
  {
    code: "中文",
    title: ["症状分析", "营养分析", "健身分析"],
    desc: [
      "描述你的症状。",
      "描述你的饮食。",
      "描述你的锻炼。"
    ]
  }
];

function updateContent() {
  document.getElementById("title").innerText =
    languages[langIndex].title[sectionIndex];

  document.getElementById("desc").innerText =
    languages[langIndex].desc[sectionIndex];

  document.getElementById("langBtn").innerText =
    "🌍 " + languages[langIndex].code;

  document.getElementById("sectionBtn").innerText =
    "🔁 " + languages[0].title[sectionIndex];
}

document.getElementById("langBtn").onclick = () => {
  langIndex = (langIndex + 1) % languages.length;
  updateContent();
};

document.getElementById("sectionBtn").onclick = () => {
  sectionIndex = (sectionIndex + 1) % 3;
  updateContent();
};

function contact() {
  window.location.href = "mailto:mb2453504@gmail.com";
}

updateContent();
