const quests = [
  ["Quest 1: Books are quiet... but one shelf whispers glittery secrets.",
   "Quest 1: You know the stories — now find the sparkle between them.",
   "Quest 1: Rack three holds more than just chapters. 👀"],

  ["Quest 2: Something delicious is hiding where monsters once lived...",
   "Quest 2: Down low, where shadows nap and dust dances.",
   "Quest 2: Beneath the snooze zone lies a sweet surprise."],

  ["Quest 3: The parents’ realm guards tiny treasures.",
   "Quest 3: The drawer beside dreams holds a dangling mystery.",
   "Quest 3: Look where sleepy thoughts are stashed each night."],

  ["Quest 4: Forks and knives jingle — but one slot hides something sly.",
   "Quest 4: Cups aren’t the only thing that sparkle in here.",
   "Quest 4: It’s not in the tea — but somewhere shiny nearby."],

  ["Quest 5: Curtains flutter, but secrets stay still.",
   "Quest 5: The kids’ room hides something fashionable in the folds.",
   "Quest 5: A breeze of fabric covers a breeze of surprise."],

  ["Quest 6: A bed can rest you… or hide what you’ll wear next.",
   "Quest 6: Beneath the master’s mattress: mystery lives in style.",
   "Quest 6: Gently lift the place you sleep — but don’t wake the secret."],

  ["Quest 7: Not near the chair. Not under the desk.",
   "Quest 7: Wardrobes can file more than paper.",
   "Quest 7: Deep inside the drawer of tasks — a surprise awaits."],

  ["Quest 8: Someone stylish left you something stylish.",
   "Quest 8: Ground floor closet whispers in someone else’s tone.",
   "Quest 8: A wardrobe downstairs holds love in fabric."]
];

let currentQuest = 0;
let currentClue = 0;
let timer = 30;
let interval;

const clueBox = document.getElementById("clueBox");
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

function startHunt() {
  startBtn.disabled = true;
  currentQuest = 0;
  currentClue = 0;
  showClue();
  launchConfetti();
}

function showClue() {
  if (currentQuest >= quests.length) {
    clueBox.innerHTML = "🎉 The Hunt Ends Here! 🎉";
    timerEl.style.display = "none";
    startBtn.disabled = false;
    startBtn.textContent = "Restart";
    launchConfetti();
    return;
  }

  clueBox.textContent = quests[currentQuest][currentClue];
  timer = 30;
  timerEl.style.display = "block";
  timerEl.textContent = `⏳ ${timer}s`;

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
      timerEl.textContent = `⏳ ${timer}s`;
    }
  }, 1000);
}

function launchConfetti() {
  const duration = 5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

startBtn.addEventListener("click", startHunt);
