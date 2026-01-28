const langSelect = document.getElementById("langSelect");
const result = document.getElementById("result");

const texts = {
  AR: {
    title: "حجز موعد طبي",
    desc: "احجز موعدك بسهولة بدون تعقيد",
    contact: "تواصل معنا",
    success: "تم إرسال طلب الحجز بنجاح ✔"
  },
  EN: {
    title: "Medical Appointment Booking",
    desc: "Book your appointment easily",
    contact: "Contact us",
    success: "Booking request sent successfully ✔"
  },
  ZH: {
    title: "医疗预约",
    desc: "轻松预约您的时间",
    contact: "联系我们",
    success: "预约请求已成功发送 ✔"
  }
};

function updateLang(lang) {
  document.getElementById("siteTitle").innerText = texts[lang].title;
  document.getElementById("descText").innerText = texts[lang].desc;
  document.getElementById("contactText").innerText = texts[lang].contact;
}

langSelect.onchange = () => {
  updateLang(langSelect.value);
};

document.getElementById("bookBtn").onclick = () => {
  result.innerText = texts[langSelect.value].success;
};

updateLang("AR");
