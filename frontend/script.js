const BASE_URL = "http://127.0.0.1:5000";

/* PROJECTS */
fetch(`${BASE_URL}/projects`)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("projectList");
    list.innerHTML = "";

    data.forEach(p => {
      list.innerHTML += `
        <div class="project-card">
          <img src="${p.image}" alt="project">
          <h4>${p.name}</h4>
          <p>${p.description}</p>
        </div>
      `;
    });
  });

/* CLIENTS */
fetch(`${BASE_URL}/clients`)
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("clientList");
    list.innerHTML = "";

    data.forEach(c => {
      list.innerHTML += `
        <div class="client-card">
          <img src="${c.image}" alt="client">
          <p>"${c.description}"</p>
          <strong>${c.name}</strong><br>
          <span>${c.designation}</span>
        </div>
      `;
    });
  });
