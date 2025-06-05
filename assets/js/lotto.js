function drawLotto() {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }

  const sorted = Array.from(numbers).sort((a, b) => a - b);
  const resultDiv = document.getElementById("lotto-result");
  resultDiv.innerHTML = sorted
    .map((num) => `<span class="ball">${num}</span>`)
    .join("");
}
