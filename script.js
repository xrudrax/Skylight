
document.addEventListener('DOMContentLoaded', () => {
  gsap.from('h1', { opacity: 0, y: 50, duration: 1 })
  gsap.from('.feature-card', { opacity: 0, scale: 0.8, stagger: 0.2, duration: 1, ease: "power2.out", delay: 1 })
  
  new ClipboardJS('.btn');

  const ctx = document.getElementById('botStats').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Moderation', 'Music', 'Fun', 'Utility'],
      datasets: [{ data: [40, 30, 20, 10], backgroundColor: ['#ff3d00', '#ff9800', '#ffca28', '#03a9f4'] }]
    }
  });
});

function inviteBot() {
  Swal.fire('Bot Invitation', 'Your bot invite link is copied!', 'success');
}
