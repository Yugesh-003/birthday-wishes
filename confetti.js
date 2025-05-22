// Confetti effect for the birthday page
document.addEventListener('DOMContentLoaded', function() {
  // Create confetti elements
  function createConfetti() {
    const confettiCount = 50;
    const container = document.body;
    
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      
      // Random position
      confetti.style.left = Math.random() * 100 + 'vw';
      
      // Random delay
      confetti.style.animationDelay = Math.random() * 5 + 's';
      
      // Random duration
      confetti.style.animationDuration = Math.random() * 3 + 3 + 's';
      
      container.appendChild(confetti);
    }
  }
  
  // Add confetti to the page
  createConfetti();
});