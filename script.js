const container = document.getElementById("cardContainer");

data.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="tag ${item.level.toLowerCase()}">${item.level}</div>
    <h3>${item.title}</h3>
  `;

  container.appendChild(card);
});


const data = [
  { title: "HTML Basics", level: "Beginner" },
  { title: "CSS Flexbox", level: "Beginner" },
  { title: "JavaScript DOM", level: "Intermediate" },
  { title: "React Components", level: "Advanced" },
  { title: "Python for Web", level: "Intermediate" },
  { title: "APIs & JSON", level: "Advanced" }
];




const data = [
  { title: "HTML Basics" },
  { title: "CSS Flexbox" },
  { title: "JavaScript DOM" },
  { title: "React Components" },
  { title: "Python for Web" },
  { title: "APIs & JSON" }
];

const container = document.getElementById("cardContainer");

data.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerText = item.title;
  container.appendChild(card);
});


