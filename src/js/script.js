const progressCards = document.getElementsByClassName("progress-card");
const programmCards = document.getElementsByClassName("programm-card");
const progressPointer = document.getElementsByClassName("progress__scroll-point");
const programmPointer = document.getElementsByClassName("progress__scroll-point");
let currentProgressCard = 0;
let currentProgrammCard = 0;
const white = 'rgb(255, 255, 255)';
const gold = 'rgb(255, 232, 178)';


for(let i = 1; i < programmCards.length; i++){
    programmCards[i].style.display = "none";
}

function previousProgressCard() {
    if(currentProgressCard > 0){
        alert('e');
        progressCards[currentProgressCard].style.display = 'none';
        currentProgressCard--;
        progressCards[currentProgressCard].style.display = 'flex';
        progressPointer[currentProgressCard + 1].style.background = white;
        progressPointer[currentProgressCard].style.background = gold;
      }
}
let ip = `translateX(0)`;
function nextProgressCard() {
    if(currentProgressCard < progressCards.length - 1){
        progressCards[currentProgressCard].style.display = 'flex';
        currentProgressCard++;
        progressCards[currentProgressCard].style.display = 'flex';
        setTimeout(function(){
            ip = `translateX(-${currentProgressCard}00%)`;
            progressCards[currentProgressCard - 1].style.transform = `translateX(-${currentProgressCard}00%)`;
            progressCards[currentProgressCard].style.transform = `translateX(-${currentProgressCard}00%)`;
            progressCards[currentProgressCard + 1].style.transform = `translateX(-${currentProgressCard}00%)`;
        },0.1);
        progressPointer[currentProgressCard - 1].style.background = white;
        progressPointer[currentProgressCard].style.background = gold;
      }
}
progressCards[0].addEventListener(
    "touchstart",
    function () {
      alert();
    },
    false,
  );
  progressCards[0].addEventListener(
    "touchend",
    function () {
      alert();
    },
    false,
  );


// Флаг, который указывает на то, что элемент зажат
let isElementClicked = false;
let ff = 0;
// Обработчик нажатия кнопки мыши
progressCards[0].addEventListener('mousedown', function(e) {

  ss = e.x;
  isElementClicked = true;
  progressCards[0].style.cursor = 'grabbing';
});

// Обработчик отпускания кнопки мыши
progressCards[0].addEventListener('mouseup', function(e) {
    ff = ss - e.x;
    if(ff > 100){
        nextProgressCard();
    }else{
        progressCards[0].style.transform = ip;
        progressCards[1].style.transform = ip;
    }
    
  isElementClicked = false;
  progressCards[0].style.cursor = 'grab';
});

// Обработчик передвижения мыши
progressCards[0].addEventListener('mousemove', function(e) {
  if(isElementClicked){
    progressCards[0].style.transform = `translateX(-${ss - e.x}px)`;
    progressCards[1].style.transform = `translateX(-${ss - e.x}px)`;
  }
});

function previousProgrammCard() {
  if(currentProgrammCard > 0){
      programmCards[currentProgrammCard].style.display = 'none';
      currentProgrammCard--;
      programmCards[currentProgrammCard].style.display = 'flex';
      programmPointer[currentProgrammCard + 1].style.background = white;
      programmPointer[currentProgrammCard].style.background = gold;
    }
}

function nextProgrammCard() {
  if(currentProgrammCard < programmCards.length - 1){
      programmCards[currentProgrammCard].style.display = 'none';
      currentProgrammCard++;
      programmCards[currentProgrammCard].style.display = 'flex';
      programmPointer[currentProgrammCard - 1].style.background = white;
      programmPointer[currentProgrammCard].style.background = gold;
    }
}

const progressScroll = document.getElementById('progressScroll');
progressScroll.addEventListener('click', function(event) {
      let index = Array.prototype.indexOf.call(event.currentTarget.children, event.target);
      if (index >= 0) {
      for (let i = 0; i < progressCards.length ; i++) {
        progressCards[i].style.display = 'none';
        progressPointer[i].style.background = white;
      }
      progressCards[index].style.display = 'flex';
      progressPointer[index].style.background = gold;
      currentProgressCard = index;
      }
  });
  const programmScroll = document.getElementById('programmScroll');
  programmScroll.addEventListener('click', function(event) {
        let index = Array.prototype.indexOf.call(event.currentTarget.children, event.target);
        if (index >= 0) {
        for (let i = 0; i < programmCards.length - 1; i++) {
          programmCards[i].style.display = 'none';
          programmPointer[i].style.background = white;
        }
        programmCards[index].style.display = 'flex';
        programmPointer[index].style.background = gold;
        currentProgrammCard = index;
        }
    });