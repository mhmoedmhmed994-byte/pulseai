let lang = "AR";
let section = "symptoms";

const text = {
  AR: {
    siteName: "PulseAI – مساعد الصحة الذكي",
    buttons: {
      symptoms: "🩺 تحليل الأعراض",
      nutrition: "🥗 تحليل التغذية",
      fitness: "🏋️ تحليل اللياقة",
      analyze: "تحليل"
    },
    content: {
      symptoms: {
        title: "تحليل الأعراض الصحية",
        desc: "اكتب الأعراض اللي حاسس بيها"
      },
      nutrition: {
        title: "تحليل التغذية",
        desc: "اكتب أكلك اليومي"
      },
      fitness: {
        title: "تحليل اللياقة",
        desc: "اكتب نشاطك البدني"
      }
    }
  },

  EN: {
    siteName: "PulseAI – Smart Health Assistant",
    buttons: {
      symptoms: "🩺 Symptom Analysis",
      nutrition: "🥗 Nutrition Analysis",
      fitness: "🏋️ Fitness Analysis",
      analyze: "Analyze"
    },
    content: {
      symptoms: {
        title: "Symptom Analysis",
        desc: "Describe your symptoms"
      },
      nutrition: {
        title: "Nutrition Analysis",
        desc: "Describe your daily diet"
      },
      fitness: {
        title: "Fitness Analysis",
        desc: "Describe your physical activity"
      }
    }
  },

  ZH: {
    siteName: "PulseAI – 智能健康助手",
    buttons: {
      symptoms: "🩺 症状分析",
      nutrition: "🥗 营养分析",
      fitness: "🏋️ 健身分析",
      analyze: "分析"
    },
    content: {
      symptoms: {
        title: "健康症状分析",
        desc: "请输入您的症状"
      },
      nutrition: {
        title: "营养分析",
        desc: "请输入您的饮食情况"
      },
      fitness: {
        title: "健身分析",
        desc: "请输入您的运动情况"
      }
    }
  }
};

function updateUI() {
  document.body.dir = lang === "AR" ? "rtl" : "ltr";

  siteName.innerText = text[lang].siteName;
  btnSymptoms.innerText = text[lang].buttons.symptoms;
  btnNutrition.innerText = text[lang].buttons.nutrition;
  btnFitness.innerText = text[lang].buttons.fitness;
  analyzeBtn.innerText = text[lang].buttons.analyze;

  title.innerText = text[lang].content[section].title;
  desc.innerText = text[lang].content[section].desc;
}

function showSection(sec) {
  section = sec;
  updateUI();
}

langSelect.onchange = (e) => {
  lang = e.target.value;
  updateUI();
};

analyzeBtn.onclick = () => {
  result.innerText = "⏳ جاري التحليل...";
};

updateUI();
