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
        desc: "Describe your diet"
      },
      fitness: {
        title: "Fitness Analysis",
        desc: "Describe your activity"
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

langBtn.onclick = () => {
  lang = lang === "AR" ? "EN" : "AR";
  updateUI();
};

analyzeBtn.onclick = async () => {
  result.innerText = "⏳ جاري التحليل...";
};

updateUI();
