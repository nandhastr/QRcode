function marquee() {
  const marqueElement = document.getElementById("marquee");
  let position = marqueElement.parentElement.offsetWidth;

  const speed = 2;

  function move() {
    position -= speed;
    marqueElement.style.left = position + "px";
    marqueElement.style.right = position + "px";

    if (position < -marqueElement.offsetWidth) {
      position = marqueElement.parentElement.offsetWidth;
    }
    requestAnimationFrame(move);
  }
  move();
}
marquee();

function createQR() {
  var input = document.getElementById("qrinput").value;
  var qrRefresh = document.getElementById("qrcode");

  // menampilkan QRcode dan tombol download
  qrRefresh.innerHTML = "";
  // Downloadlink.style.display = "none";

  if (input.trim() !== "") {
    var qrcode = new QRCode(qrRefresh, {
      text: input,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
    // tampilkankan tombol download bareng dengan hasil qrcode
    // downloadBtn.style.display = "block",
    qrRefresh.style.display = "block";
  }
}

function clearinput() {
  document.getElementById("qrinput").value = "";
  // hide tombol dowanload dan qrCode, hide ketika kolom input di klik
  // var downloadBtn = document.getElementById("DownloadBtn")
  var qrRefresh = document.getElementById("qrcode");
  // downloadBtn.style.display = "none"
  qrRefresh.style.display = "none";
}

var tahun = new Date().getFullYear();
document.getElementById("year").textContent = tahun;

// // function download QRCode
// function DownloadQRCode(uri){
//     var name = document.getElementById("qrinput").value + ".png";
//     var link = document.getElementById("DownloadBtn");
//     link.href = uri;
//     link.setAttribute("download", name);
//     link.dispatchEvent(new MouseEvent("click"));
// }
