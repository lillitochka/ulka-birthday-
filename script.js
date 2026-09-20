const music = document.getElementById("music");
const musicButton = document.querySelector(".music-button");

let musicPlaying = false;

window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");

    if (loader) {
      loader.classList.add("hide");
    }

    music.volume = 0.35;

    music.play()
      .then(() => {
        musicPlaying = true;
        musicButton.textContent = "❚❚";
      })
      .catch(() => {
        musicPlaying = false;
        musicButton.textContent = "♫";
      });

  }, 1200);
});


function toggleMusic() {
  if (musicPlaying) {
    music.pause();
    musicPlaying = false;
    musicButton.textContent = "♫";
  } else {
    music.play()
      .then(() => {
        musicPlaying = true;
        musicButton.textContent = "❚❚";
      })
      .catch(() => {
        musicPlaying = false;
        musicButton.textContent = "♫";
      });
  }
}


function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}


/* плавающие элементы */

const floatingContainer = document.getElementById("floatingElements");

const floatingItems = [
  "♡",
  "♥",
  "✦",
  "✧",
  "🐾",
  "♡",
  "✦",
  "🐱"
];

function createFloatingItem() {

  const item = document.createElement("div");

  item.className = "floating-item";

  item.textContent =
    floatingItems[
      Math.floor(Math.random() * floatingItems.length)
    ];

  item.style.left = Math.random() * 100 + "%";

  item.style.fontSize =
    (12 + Math.random() * 20) + "px";

  item.style.animationDuration =
    (8 + Math.random() * 8) + "s";

  item.style.animationDelay =
    Math.random() * 2 + "s";

  floatingContainer.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 18000);
}


setInterval(createFloatingItem, 700);


/* мемы */

const memes = [
  {
    image: "meme1.jpg",
    text: "йоу васап бро"
  },

  {
    image: "meme2.jpg",
    text: "мне конечно жалко что типо в нас попадают.. но честно мне вообще не жаль. мне насрать"
  },

  {
    image: "meme3.jpg",
    text: "очк🔇"
  },

  {
    image: "meme4.jpg",
    text: "бобик"
  },

  {
    image: "meme5.jpg",
    text: "э ты нормально со мной разговаривай урундубель"
  }
];

let currentMeme = 0;

const memeCard = document.getElementById("memeCard");
const memeImage = document.getElementById("memeImage");
const memeText = document.getElementById("memeText");
const memeCounter = document.getElementById("memeCounter");


memeCard.addEventListener("click", () => {
  memeCard.classList.toggle("flipped");
});


function nextMeme() {

  currentMeme++;

  if (currentMeme >= memes.length) {
    currentMeme = 0;
  }

  memeCard.classList.remove("flipped");

  setTimeout(() => {

    memeImage.src = memes[currentMeme].image;

    memeText.textContent =
      memes[currentMeme].text;

    memeCounter.textContent =
      `${currentMeme + 1} / ${memes.length}`;

  }, 400);
}


/* появление секций при прокрутке */

const animatedElements =
  document.querySelectorAll(
    ".greeting-card, .reason-card, .meme-card, .section-title"
  );


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

        }

      });

    },
    {
      threshold: 0.15
    }
  );


animatedElements.forEach((element) => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(35px)";

  element.style.transition =
    "opacity 0.8s ease, transform 0.8s ease";

  observer.observe(element);

});


/* небольшая реакция на нажатие */

document.querySelectorAll("button").forEach((button) => {

  button.addEventListener("click", () => {

    button.style.transform = "scale(0.94)";

    setTimeout(() => {
      button.style.transform = "";
    }, 120);

  });

});
