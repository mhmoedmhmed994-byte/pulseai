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
  document.getElementById("siteName").innerText = text[lang].siteName;
  document.getElementById("btnSymptoms").innerText = text[lang].buttons.symptoms;
  document.getElementById("btnNutrition").innerText = text[lang].buttons.nutrition;
  document.getElementById("btnFitness").innerText = text[lang].buttons.fitness;
  document.getElementById("analyzeBtn").innerText = text[lang].buttons.analyze;

  document.getElementById("title").innerText =
    text[lang].content[section].title;
  document.getElementById("desc").innerText =
    text[lang].content[section].desc;
}

function showSection(sec) {
  section = sec;
  updateUI();
}

document.getElementById("langBtn").onclick = () => {
  lang = lang === "AR" ? "EN" : "AR";
  updateUI();
};

updateUI();
