const BASE_URL = "http://127.0.0.1:5000";

/* =====================
   ADD PROJECT
===================== */
document.getElementById("projectForm").addEventListener("submit", function(e){
    e.preventDefault();

    const inputs = this.querySelectorAll("input, textarea");

    const data = {
        name: inputs[0].value,
        description: inputs[1].value
    };

    fetch(`${BASE_URL}/admin/project`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
        alert("Project added");
        this.reset();
    });
});

/* =====================
   ADD CLIENT
===================== */
document.getElementById("clientForm").addEventListener("submit", function(e){
    e.preventDefault();

    const inputs = this.querySelectorAll("input, textarea");

    const data = {
        name: inputs[0].value,
        designation: inputs[1].value,
        description: inputs[2].value
    };

    fetch(`${BASE_URL}/admin/client`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
        alert("Client added");
        this.reset();
    });
});

/* =====================
   LOAD CONTACTS
===================== */
fetch(`${BASE_URL}/admin/contacts`)
  .then(res => res.json())
  .then(data => {
      const list = document.getElementById("contactList");
      list.innerHTML = "";

      data.forEach(c => {
          const div = document.createElement("div");
          div.innerHTML = `
            <strong>${c.fullName}</strong><br>
            ${c.email} | ${c.mobile} | ${c.city}
          `;
          list.appendChild(div);
      });
  });

/* =====================
   LOAD NEWSLETTERS
===================== */
fetch(`${BASE_URL}/admin/newsletters`)
  .then(res => res.json())
  .then(data => {
      const list = document.getElementById("newsletterList");
      list.innerHTML = "";

      data.forEach(n => {
          const div = document.createElement("div");
          div.innerText = n.email;
          list.appendChild(div);
      });
  });
