fetch("http://localhost:5000/projects")
.then(res => res.json())
.then(data => {
    let html = "";

    data.forEach(project => {
        html += `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        `;
    });

    document.getElementById("projects").innerHTML = html;
});
