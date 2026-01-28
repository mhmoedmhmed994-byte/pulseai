const texts = {
  ar: {
    title: "حجز خدمة بسهولة",
    desc: "احجز موعدك في أقل من دقيقة",
    contact: "تواصل معنا",
    success: "تم إرسال طلب الحجز بنجاح ✔",
    btn: "تأكيد الحجز"
  },
  en: {
    title: "Easy Service Booking",
    desc: "Book your appointment in less than a minute",
    contact: "Contact us",
    success: "Booking request sent successfully ✔",
    btn: "Confirm Booking"
  },
  zh: {
    title: "服务预约",
    desc: "一分钟内完成预约",
    contact: "联系我们",
    success: "预约请求已成功发送 ✔",
    btn: "确认预约"
  }
};

const langSelect = document.getElementById("language");

function changeLang(lang) {
  document.getElementById("title").innerText = texts[lang].title;
  document.getElementById("description").innerText = texts[lang].desc;
  document.getElementById("contactTitle").innerText = texts[lang].contact;
  document.getElementById("bookBtn").innerText = texts[lang].btn;
}

langSelect.addEventListener("change", () => {
  changeLang(langSelect.value);
});

document.getElementById("bookBtn").onclick = () => {
  document.getElementById("result").innerText =
    texts[langSelect.value].success;
};

changeLang("ar");
