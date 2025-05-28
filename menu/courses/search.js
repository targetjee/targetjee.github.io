const courses = {
  "Radiant Batch Class11 Mathematics": "lecturemaths.html",
  "Radiant Batch Class11 Physics": "lecturescience.html",
  "Radiant Batch Class11 Chemistry": "lecturechemistry.html",
};

function searchCourses() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = "";

    if (input === "") return;

    let matches = Object.keys(courses).filter(course => course.toLowerCase().includes(input));

    if (matches.length > 0) {
        matches.forEach(course => {
            let listItem = document.createElement("li");
            listItem.textContent = course;

            // Redirect to the correct lecture page when clicked
            listItem.onclick = function() {
                window.location.href = courses[course];
            };

            suggestions.appendChild(listItem);
        });
    } else {
        document.getElementById("searchResult").innerText = `No exact match found for "${input}".`;
        let closestMatch = Object.keys(courses).find(course => course.toLowerCase().includes(input[0])) || "Check other subjects!";
        document.getElementById("alternative").innerText = `Did you mean: ${closestMatch}?`;
    }
}
