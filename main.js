function toggleScroll() {
  const items = document.getElementById('scrollItems');
  items.style.display = items.style.display === 'flex' ? 'none' : 'flex';
}

function openPage(url) {
  window.open(url, '_blank'); // Yeni pencere
}

// Admin panel kodu
function adminLogin() {
  const code = prompt("Admin kodunu giriniz:");
  if(code === "adminabishova01"){
    alert("Admin modu açıldı. Artık ürün ve kampanya ekleyebilirsiniz!");
    // Buraya admin panel JS özelliklerini bağlayacağız
  } else {
    alert("Yanlış kod!");
  }
}
