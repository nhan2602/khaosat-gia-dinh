const scriptURL = "https://script.google.com/macros/s/AKfycbxH7K9Gkc3qzrl-HFvtLets9blYzqfocSErUrwKhQRqoO2rG6945fTC1gCWA8qNPdUrLQ/exec";

document.getElementById("surveyForm").addEventListener("submit", function(e){
  e.preventDefault();

  const data = {
    hoten: document.getElementById("hoten").value,
    lophoc: document.getElementById("lophoc").value,
    diachi: document.querySelector("[name='dia_chi']").value,
    thanhvien: document.querySelector("[name='thanh_vien']").value,
    thunhap: document.querySelector("[name='thu_nhap']").value,
    dientich: document.querySelector("[name='dien_tich']").value,
    tiendien: document.querySelector("[name='tien_dien']").value,
    tiennuoc: document.querySelector("[name='tien_nuoc']").value,
    thucpham: document.querySelector("[name='chi_phi_thuc_pham']").value,
    phuongtien: "test"
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    document.getElementById("message").innerHTML = "✅ Gửi thành công";
    document.getElementById("surveyForm").reset();
  })
  .catch(error => {
    document.getElementById("message").innerHTML = "❌ Lỗi gửi dữ liệu";
  });
});
