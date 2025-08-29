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


const buttons = document.querySelectorAll(".call-btn");
const historyDiv = document.getElementById("call-history");

for (const btn of buttons) {
    btn.addEventListener("click", () => {

        if (coins < 20) {
            return;
        }

        const card = btn.closest(".card");
        const serviceName = card.querySelector(".name").textContent;
        const serviceNumber = card.querySelector(".number").textContent;
        const time = new Date().toLocaleTimeString();

        historyDiv.innerHTML = `
            <div class="m-3 flex justify-between items-center">
                <div>
                    <h1 class="font-bold">${serviceName}</h1>
                    <p class="text-gray-500">${serviceNumber}</p>
                </div>
                <div>
                    <p>${time}</p>
                </div>
            </div>
        ` + historyDiv.innerHTML;
    });
}

const clearBtn = document.getElementById("clear-history");
const historyD = document.getElementById("call-history");

clearBtn.addEventListener("click", () => {
    historyD.innerHTML = "";
});





let copyCount = 0;
const copyCountDisplay = document.getElementById('copyCount');
const copyButtons = document.querySelectorAll('.copy-btn');

for (let button of copyButtons) {
  button.addEventListener('click', function() {
    const card = button.closest('.card');
    const hotlineNumber = card.querySelector('.hotline-number').textContent;

    
    navigator.clipboard.writeText(hotlineNumber)
      .then(() => {
        if (hotlineNumber) { 
          alert(`Hotline number ${hotlineNumber} copied!`);
          copyCount++;
          copyCountDisplay.textContent = copyCount;
        } else if (!hotlineNumber) {
          alert("কোনো number নেই!");
        }
      })
      .catch(err => {
        alert("Failed to copy!");
        console.error(err);
      });
  });
}





   






