const who = ['My dog', 'The cat', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed on', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car', 'my project'];
const when = ['yesterday', 'before class', 'while I was sleeping', 'during lunch', 'while I was praying'];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

window.onload = () => {
  const parts = [
    { id: "who", text: getRandom(who) + "<br><small>Who to blame?<br>¿Quién es culpable?</small>" },
    { id: "action", text: getRandom(action) + "<br><small>What they did<br>¿Qué hizo?</small>" },
    { id: "what", text: getRandom(what) + "<br><small>What do you want to avoid<br>¿Qué quieres evitar?</small>" },
    { id: "when", text: getRandom(when) + "<br><small>When?<br>¿Cuándo?</small>" }
  ];

  parts.forEach((part, index) => {
    setTimeout(() => {
      const el = document.getElementById(part.id);
      el.innerHTML = part.text;
      el.classList.remove("hidden");
    }, index * 1000);
  });
};
