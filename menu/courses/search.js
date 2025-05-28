const courses = ["Radiant Batch Class11 Mathematics", "Radiant Batch Class11 Physics", "Radiant Batch Class11 Chemistry"];

function searchCourses() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";

    if (input === "") return;

    let matches = courses.filter(course => course.toLowerCase().includes(input));

    if (matches.length > 0) {
        matches.forEach(course => {
            let listItem = document.createElement("li");
            listItem.textContent = course;
            listItem.onclick = function() {
                document.getElementById("searchResult").innerText = `You selected: ${course}`;
                document.getElementById("alternative").innerText = "";
            };
            suggestions.appendChild(listItem);
        });
    } else {
        document.getElementById("searchResult").innerText = `No exact match found for "${input}".`;
        let closestMatch = courses.find(course => course.toLowerCase().includes(input[0])) || "Check other subjects!";
        document.getElementById("alternative").innerText = `Did you mean: ${closestMatch}?`;
    }
}
