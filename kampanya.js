let kampanyalar = JSON.parse(localStorage.getItem('kampanyalar')) || [];

// Kampanyaları göster
function gosterKampanyalar(){
  const div = document.getElementById('kampanyaListesi');
  div.innerHTML = '';
  kampanyalar.forEach((k,i)=>{
    const kDiv = document.createElement('div');
    kDiv.classList.add('kampanya');
    kDiv.innerHTML = `
      <img src="${k.resim}" alt="kampanya">
      <h3>${k.baslik}</h3>
      <p>${k.aciklama}</p>
      <button onclick="likeKampanya(${i})">❤️ ${k.begeni || 0}</button>
      <button onclick="kampanyaSil(${i})">✕</button>
    `;
    div.appendChild(kDiv);
  });
}

function likeKampanya(i){
  kampanyalar[i].begeni = (kampanyalar[i].begeni || 0)+1;
  localStorage.setItem('kampanyalar', JSON.stringify(kampanyalar));
  gosterKampanyalar();
}

function kampanyaSil(i){
  kampanyalar.splice(i,1);
  localStorage.setItem('kampanyalar', JSON.stringify(kampanyalar));
  gosterKampanyalar();
}

// Admin ile kampanya ekleme
function adminLogin(){
  const code = prompt("Admin kodunu giriniz:");
  if(code==="adminabishova01"){
    const baslik = prompt("Kampanya Başlığı:");
    const aciklama = prompt("Açıklama:");
    const resim = prompt("Resim URL:");
    kampanyalar.push({baslik,aciklama,resim});
    localStorage.setItem('kampanyalar', JSON.stringify(kampanyalar));
    gosterKampanyalar();
  }
}

gosterKampanyalar();
