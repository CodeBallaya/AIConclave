// Add this to your JavaScript file
const customCursor = document.querySelector('.custom-cursor');
const targetDivs = document.querySelectorAll('.target-div');

window.addEventListener('mousemove', (e) => {
  let isOverTargetDiv = false;

  targetDivs.forEach(div => {
    const rect = div.getBoundingClientRect();
    const isOverDiv = (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    );

    if (isOverDiv) {
      isOverTargetDiv = true;
      customCursor.style.display = 'block';
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
    }
  });

  if (!isOverTargetDiv) {
    customCursor.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const day1Btn = document.getElementById('day1-btn');
  const day2Btn = document.getElementById('day2-btn');
  const day1Schedule = document.getElementById('day1-schedule');
  const day2Schedule = document.getElementById('day2-schedule');

  day1Btn.addEventListener('click', function() {
      day1Btn.classList.add('active');
      day2Btn.classList.remove('active');
      day1Schedule.classList.add('active');
      day2Schedule.classList.remove('active');
  });

  day2Btn.addEventListener('click', function() {
      day2Btn.classList.add('active');
      day1Btn.classList.remove('active');
      day2Schedule.classList.add('active');
      day1Schedule.classList.remove('active');
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav ") {
      x.className += " responsive ";
  } else {
      x.className = "topnav ";
  }
}