const colors = ["#f9ebea", "#e8f5e9", "#e3f2fd", "#fff3e0", "#f3e5f5"];
let colorIndex = 0;

function changeColor() {
  const resume = document.getElementById("resume");
  resume.style.backgroundColor = colors[colorIndex];
  resume.style.color = colorIndex % 2 === 0 ? "#333" : "#111";
  colorIndex = (colorIndex + 1) % colors.length;
}