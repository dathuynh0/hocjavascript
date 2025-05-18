const labels = document.querySelectorAll(".label");

for (let label of labels) {
  label.addEventListener("click", function () {
    removeLabel();
    label.classList.add("active");
  });
}

function removeLabel() {
  for (let label of labels) {
    label.classList.remove("active");
  }
}
