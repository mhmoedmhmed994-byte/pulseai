let lang = "EN";
let section = "symptoms";

const text = {
  EN: {
    siteName: "PulseAI",
    buttons: {
      symptoms: "Symptoms",
      nutrition: "Nutrition",
      fitness: "Fitness",
      analyze: "Analyze"
    },
    content: {
      symptoms: {
        title: "Symptom analysis",
        desc: "Describe how you feel."
      },
      nutrition: {
        title: "Nutrition analysis",
        desc: "Describe your diet."
      },
      fitness: {
        title: "Fitness analysis",
        desc: "Describe your activity."
      }
    }
  },

  AR: {
    siteName: "PulseAI",
    buttons: {
      symptoms: "الأعراض",
      nutrition: "التغذية",
      fitness: "اللياقة",
      analyze: "تحليل"
    },
    content: {
      symptoms: {
        title: "تحليل الأعراض",
        desc: "اكتب اللي حاسس بيه."
      },
      nutrition: {
        title: "تحليل التغذية",
        desc: "اكتب أكلك."
      },
      fitness: {
        title: "تحليل اللياقة",
        desc: "اكتب نشاطك."
      }
    }
  },

  ZH: {
    siteName: "PulseAI",
    buttons: {
      symptoms: "症状",
      nutrition: "营养",
      fitness: "健身",
      analyze: "分析"
    },
    content: {
      symptoms: {
        title: "症状分析",
        desc: "请输入您的症状。"
      },
      nutrition: {
        title: "营养分析",
        desc: "请输入您的饮食。"
      },
      fitness: {
        title: "健身分析",
        desc: "请输入您的活动。"
      }
    }
  }
};

function updateUI() {
  document.body.dir = lang === "AR" ? "rtl" : "ltr";

  btnSymptoms.innerText = text[lang].buttons.symptoms;
  btnNutrition.innerText = text[lang].buttons.nutrition;
  btnFitness.innerText = text[lang].buttons.fitness;
  analyzeBtn.innerText = text[lang].buttons.analyze;

  title.innerText = text[lang].content[section].title;
  desc.innerText = text[lang].content[section].desc;
}

langSelect.onchange = e => {
  lang = e.target.value;
  updateUI();
};

function showSection(sec) {
  section = sec;
  updateUI();
}

analyzeBtn.onclick = () => {
  result.innerText = "Analyzing...";
};

updateUI();
