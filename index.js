// heart section
let count = 0
const loveCount = document.getElementById('loveCount')
const loveButtons = document.querySelectorAll('.love-btn')

for (let button of loveButtons) {
  button.addEventListener('click', () => {
    count++
    loveCount.textContent = count
  })
}

// call Alart section

let coins = 100
const coinDisplay = document.getElementById('coins')
const callBtn = document.querySelectorAll('.call-btn')

for (let button of callBtn) {
  button.addEventListener('click', function() {
    if (coins >= 20) {
      coins -= 20;
      coinDisplay.textContent = coins

      const card = button.closest('.card');
      const serviceName = card.querySelector('.name').textContent
      const service = card.querySelector('.service').textContent
      const serviceNumber = card.querySelector('.number').textContent
      alert(`📞 calling... ${serviceName} ${service} ${serviceNumber}`)
    } 
    else {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে !")
    }
  })
}

// history Section

const callHistory = document.getElementById('call-history');

button.addEventListener('click', function() {
  const card = button.closest('.card');
  const serviceName = card.querySelector('.name').textContent;
  const serviceNumber = card.querySelector('.number').textContent;

  const li = document.createElement('li');
  li.textContent = `Service: ${serviceName}, Number: ${serviceNumber}`;
  callHistory.appendChild(li);
});





