let lectures = [
  "https://www.youtube.com/embed/AlZzcg3RD0Y?si=8Y0JTD9LtBhuTUUt",
  "https://www.youtube.com/embed/example2",
  "https://www.youtube.com/embed/example3"
];

let currentLecture = 0;

function changeLecture() {
  let lectureMenu = document.getElementById("lectureMenu");
  document.getElementById("lectureVideo").src = lectureMenu.value;
}

function prevLecture() {
  if (currentLecture > 0) {
    currentLecture--;
    document.getElementById("lectureVideo").src = lectures[currentLecture];
    document.getElementById("lectureMenu").value = lectures[currentLecture];
  }
}

function nextLecture() {
  if (currentLecture < lectures.length - 1) {
    currentLecture++;
    document.getElementById("lectureVideo").src = lectures[currentLecture];
    document.getElementById("lectureMenu").value = lectures[currentLecture];
  }
}
