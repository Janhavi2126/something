const typingSound = new Audio("typing.mp3");
typingSound.volume = 0.3;   // soft romantic sound

let currentAudio = null;
var allText = document.querySelectorAll("h1, h3, h4, li");
var items = document.querySelectorAll(".about-her li");
var itemImage = document.getElementById("itemImage");
var resetBtn = document.getElementById("resetBtn");

// Save original text
var originalText = [];
items.forEach(function (item) {
  originalText.push(item.innerHTML);
});

function hideAllText() {
  allText.forEach(function (el) {
    el.style.display = "none";
  });
}

function playMusic(src) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(src);
  currentAudio.play();
}

function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}

function showImage(src) {
  var imageBox = document.getElementById("imageBox");
  imageBox.style.display = "block";
  itemImage.style.display = "block";
  itemImage.src = src;

  itemImage.classList.remove("show");
  setTimeout(() => itemImage.classList.add("show"), 10);
}

function setBgColor(color) {
  document.body.style.backgroundColor = color;
}
function typeWriter(element, text, speed = 70) {
  element.innerHTML = "";
  let i = 0;

  const cursor = document.createElement("span");
  cursor.innerHTML = "|";
  cursor.style.animation = "blink 1s infinite";
  element.appendChild(cursor);

  typingSound.pause();
  typingSound.currentTime = 0;
  typingSound.play();

  function typing() {
    if (i < text.length) {
      cursor.remove();

      let char = text[i];

      if (char === "\n") {
        element.innerHTML += "<br>";
      } else {
        element.innerHTML += char;
      }

      element.appendChild(cursor);
      i++;

      let delay = speed;
      if (",.!❤️".includes(char)) delay = speed * 6;

      setTimeout(typing, delay);
    } else {
      cursor.remove();
      typingSound.pause();      // 🔇 stop sound when done
      typingSound.currentTime = 0;
    }
  }
  typing();
}


var firstItem  = document.querySelector(".love");
var secondItem = document.querySelector(".description");
var thirdItem  = document.querySelector(".she");
var fourthItem = document.querySelector(".worldWithoutHer");
var fifthItem  = document.querySelector(".quality");
var sixthItem  = document.querySelector(".better");

firstItem.addEventListener("click", function () {
  hideAllText();
  setBgColor("#c8ec8fff");
  this.style.display = "block";
 typeWriter(
  this,
  `Because you are my happiness ❤️

I mean just look at yourself
how can someone stop falling for you

you are the person who brings so much happiness in my life
who actually changed me in a very good way

and there is no such reason yrr, it just happened
basss hogaya yrr tumse pyaarrr ❤️`
);

  showImage("WhatsApp Image 2025-12-29 at 12.18.27 PM.jpeg");
  playMusic("kya-hua-tera-wada_VxNoFl3G.mp3");
  createHearts();
});

secondItem.addEventListener("click", function () {
  hideAllText();
  setBgColor("#cdb4db");
  this.style.display = "block";
  typeWriter(
  this,
  `You are the most beautiful soul ✨

you are the person jiske life agr tum ho na
toh voh bahot luckyyy hoga

matlb voh bahot luckyy insan hoga jisse tum pyaar karte ho`
);

  showImage("WhatsApp Image 2025-12-29 at 11.46.18 AM.jpeg");
  playMusic("ishq-wala-love-soty-mr-jatin_8DS3uhc0.mp3");
  createHearts();
});

thirdItem.addEventListener("click", function () {
  hideAllText();
  setBgColor("#bde0fe");
  this.style.display = "block";
  typeWriter(
  this,
  `You are my everything 🌍

youu aree soo important for mee
mera hasna mera rona khush rahna ek tarike se abh tumpe depend karta hai`
);

  showImage("WhatsApp Image 2025-12-29 at 11.46.17 AM (1).jpeg");
  playMusic("chaar-kadam-pk-128-kbps_JTpKgKIk.mp3");
  createHearts();
});

fourthItem.addEventListener("click", function () {
  hideAllText();
  setBgColor("#219ebc");
  this.style.display = "block";
  typeWriter(
  this,
  "Life feels empty without you 😔"
);

  showImage("WhatsApp Image 2025-12-29 at 11.31.36 AM.jpeg");
  playMusic("mujhe-mein-tu-special-26-mr-jatin_AmOeCec4.mp3");
  createHearts();
});

fifthItem.addEventListener("click", function () {
  hideAllText();
  setBgColor("#edafb8");
  this.style.display = "block";
  typeWriter(
  this,
  "You are the most beautiful soul ✨"
);

  showImage("WhatsApp Image 2025-12-29 at 11.46.17 AM.jpeg");
  playMusic("rabba-main-toh-mar-gaya-oye-mr-jatin_MpIcFJiG.mp3");
  createHearts();
});

sixthItem.addEventListener("click", function () {
  hideAllText();
  setBgColor("#8d99ae");
  this.style.display = "block";
 typeWriter(
  this,
  `No one is better than you ❤️

Haa noo one is better than youu
because you are the bestttt

or jabh mere pass bestt haii toh better kyu dhundhu
orr meko tumhare alava orr koi chaiye bhi nahiii`
);


  showImage("WhatsApp Image 2025-12-29 at 11.26.14 AM.jpeg");
  playMusic("tumse-kiran-dhoop-ki-sambalpuristarin_Cv6RX7V2.mp3");
  createHearts();
});

// Reset button
resetBtn.addEventListener("click", function () {
  allText.forEach(el => el.style.display = "block");
  items.forEach((item, i) => item.innerHTML = originalText[i]);
  itemImage.style.display = "none";
  document.getElementById("imageBox").style.display = "none";
  document.querySelectorAll(".heart").forEach(h => h.remove());
  document.body.style.backgroundColor = "";
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    typingSound.pause();
    typingSound.currentTime = 0;

  }
});
