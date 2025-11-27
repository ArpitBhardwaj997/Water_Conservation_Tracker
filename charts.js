const ctx = document.getElementById('usageLineChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      label: 'Daily Water Usage (L)',
      data: [120,130,90,160,100,80,140]
    }]
  }
});

function generateSuggestions(usage) {
  const msg = usage > 150
    ? "Your usage is above average! Try using bucket instead of shower."
    : "Great job! You are conserving water efficiently.";
  document.getElementById("ai-suggestions").innerHTML = msg;
}

if (todayUsage > 180) {
  alert("⚠ High usage detected! Consider reducing water usage now.");
}

if (monthUsage < 3000) {
  awardBadge("Water Saver Badge");
}

