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
