const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxH7K9Gkc3qzrl-HFvtLets9blYzqfocSErUrwKhQRqoO2rG6945fTC1gCWA8qNPdUrLQ/exec";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("surveyForm");

  if (!form) {
    console.error("❌ Không tìm thấy form");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      ho_ten: form.ho_ten.value,
      so_nguoi: form.so_nguoi.value
    };

    fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    alert("✅ Gửi khảo sát thành công!");
    form.reset();
  });
});
