function shuffleColors() {
    // List of allowed colors
    const colors = ["red", "yellow", "green", "blue", "purple"];
    // Shuffle the colors array
    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }
    return colors;
  }

  function changeColors() {
    // Get all bars and assign them a shuffled color
    const bars = document.querySelectorAll(".bar");
    const shuffledColors = shuffleColors();
    bars.forEach((bar, index) => {
      bar.style.backgroundColor = shuffledColors[index];
    });
  }

  // Initialize bars with random shuffled colors on page load
  window.onload = changeColors;