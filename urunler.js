let urunler = JSON.parse(localStorage.getItem('urunler')) || [];

// Ürünleri ekrana bas
function gosterUrunler() {
  const div = document.getElementById('urunListesi');
  div.innerHTML = '';
  urunler.forEach((u, i) => {
    const urunDiv = document.createElement('div');
    urunDiv.classList.add('urun');
    urunDiv.innerHTML = `
      <img src="${u.resim}" alt="urun">
      <h3>${u.isim} - ${u.fiyat}</h3>
      <p>${u.aciklama}</p>
      <button onclick="likeUrun(${i})">❤️ ${u.begeni || 0}</button>
      <div class="yorumlar">
        <h4>Yorumlar:</h4>
        ${u.yorumlar ? u.yorumlar.map((y,j)=>`<div class="yorum">${y} <button onclick="silYorum(${i},${j})">✕</button></div>`).join('') : ''}
        <input type="text" id="yorumInput${i}" placeholder="Yorum yaz...">
        <button onclick="yorumEkle(${i})">Gönder</button>
      </div>
      <button class="urun-btn" onclick="urunSil(${i})">Ürünü Sil</button>
    `;
    div.appendChild(urunDiv);
  });
}

// Begeni sayisi
function likeUrun(i){
  urunler[i].begeni = (urunler[i].begeni || 0) + 1;
  localStorage.setItem('urunler', JSON.stringify(urunler));
  gosterUrunler();
}

// Yorum ekle
function yorumEkle(i){
  const val = document.getElementById(`yorumInput${i}`).value;
  if(!val) return;
  if(!urunler[i].yorumlar) urunler[i].yorumlar = [];
  urunler[i].yorumlar.push(val);
  document.getElementById(`yorumInput${i}`).value = '';
  localStorage.setItem('urunler', JSON.stringify(urunler));
  gosterUrunler();
}

// Yorum sil
function silYorum(i,j){
  urunler[i].yorumlar.splice(j,1);
  localStorage.setItem('urunler', JSON.stringify(urunler));
  gosterUrunler();
}

// Ürünü sil
function urunSil(i){
  urunler.splice(i,1);
  localStorage.setItem('urunler', JSON.stringify(urunler));
  gosterUrunler();
}

// Admin ile ürün ekleme
function adminLogin(){
  const code = prompt("Admin kodunu giriniz:");
  if(code==="adminabishova01"){
    const isim = prompt("Ürün ismi:");
    const fiyat = prompt("Fiyat:");
    const aciklama = prompt("Açıklama:");
    const resim = prompt("Resim URL:");
    urunler.push({isim,fiyat,aciklama,resim});
    localStorage.setItem('urunler', JSON.stringify(urunler));
    gosterUrunler();
  }
}

gosterUrunler();
