const quests = [
  // Quest 1: Bookshelf (earring)
  [
    "Quest 1: Books are quiet... but one shelf whispers glittery secrets.",
    "Quest 1: You know the stories — now find the sparkle between them.",
    "Quest 1: Rack three holds more than just chapters. 👀"
  ],

  // Quest 2: Under bed (chocolate bouquet)
  [
    "Quest 2: Something delicious is hiding where monsters once lived...",
    "Quest 2: Down low, where shadows nap and dust dances.",
    "Quest 2: Beneath the snooze zone lies a sweet surprise."
  ],

  // Quest 3: Master bedroom bedside drawer (phone charm)
  [
    "Quest 3: The parents’ realm guards tiny treasures.",
    "Quest 3: The drawer beside dreams holds a dangling mystery.",
    "Quest 3: Look where sleepy thoughts are stashed each night."
  ],

  // Quest 4: Cutlery rack (ring)
  [
    "Quest 4: Forks and knives jingle — but one slot hides something sly.",
    "Quest 4: Cups aren’t the only thing that sparkle in here.",
    "Quest 4: It’s not in the tea — but somewhere shiny nearby."
  ],

  // Quest 5: Behind kids' room curtains (dress)
  [
    "Quest 5: Curtains flutter, but secrets stay still.",
    "Quest 5: The kids’ room hides something fashionable in the folds.",
    "Quest 5: A breeze of fabric covers a breeze of surprise."
  ],

  // Quest 6: Master bedroom bed lift-up storage (dress2)
  [
    "Quest 6: A bed can rest you… or hide what you’ll wear next.",
    "Quest 6: Beneath the master’s mattress: mystery lives in style.",
    "Quest 6: Gently lift the place you sleep — but don’t wake the secret."
  ],

  // Quest 7: Office room wardrobe drawer (dress3)
  [
    "Quest 7: Not near the chair. Not under the desk.",
    "Quest 7: Wardrobes can file more than paper.",
    "Quest 7: Deep inside the drawer of tasks — a surprise awaits."
  ],

  // Quest 8: MIL’s wardrobe, ground floor (gift from mother-in-law)
  [
    "Quest 8: Someone stylish left you something stylish.",
    "Quest 8: Ground floor closet whispers in someone else’s tone.",
    "Quest 8: A wardrobe downstairs holds love in fabric."
  ]
];

let currentQuest = 0;
let currentClue = 0;
let timer = 30;
let interval;

function startHunt() {
  currentQuest = 0;
  currentClue = 0;
  showClue();
}

function showClue() {
  if (currentQuest >= quests.length) {
    document.getElementById("clueBox").innerText = "🎉 The Hunt Ends Here! 🎉";
    document.getElementById("timer").style.display = "none";
    return;
  }

  const clueText = quests[currentQuest][currentClue];
  document.getElementById("clueBox").innerText = clueText;
  timer = 30;
  document.getElementById("timer").innerText = `⏳ ${timer}s`;

  if (navigator.vibrate) navigator.vibrate([200, 100, 200]);

  clearInterval(interval);
  interval = setInterval(() => {
    timer--;
    if (timer <= 0) {
      currentClue++;
      if (currentClue >= quests[currentQuest].length) {
        currentQuest++;
        currentClue = 0;
      }
      clearInterval(interval);
      showClue();
    } else {
      document.getElementById("timer").innerText = `⏳ ${timer}s`;
    }
  }, 1000);
}

// Generate QR code for GitHub Pages URL
const siteURL = window.location.origin;
new QRCode(document.getElementById("qrcode"), siteURL);
