let selectedFlowers = [];

function addFlower(flowerSrc) {
  if (selectedFlowers.length < 3) {
    selectedFlowers.push(flowerSrc);
    const placement = document.getElementById('flower-placement');
    const img = document.createElement('img');
    img.src = flowerSrc;
    placement.appendChild(img);
  } else {
    alert("You can add only 3 flowers!");
  }
}

function goToBow() {
  localStorage.setItem('flowers', JSON.stringify(flowers));
  window.location.href = 'bow.html';
}

function selectBow(src) {
  localStorage.setItem('bow', src);
  const bowContainer = document.getElementById('bow-placement');
  bowContainer.innerHTML = ''; // allow only one
  const img = document.createElement('img');
  img.src = src;
  bowContainer.appendChild(img);
}

function goToFinal() {
  window.location.href = 'final.html';
}

function exportAsImage() {
  document.querySelector('.temp-border').classList.remove('temp-border');
  html2canvas(document.getElementById('final-wrapper')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'flower_arrangement.jpg';
    link.href = canvas.toDataURL();
    link.click();
  });
}

function resetBasket() {
  const flowerContainer = document.getElementById('flower-placement');
  flowerContainer.innerHTML = '';
  selectedFlowers = []; // Reset the array if you're storing selected flowers
}

