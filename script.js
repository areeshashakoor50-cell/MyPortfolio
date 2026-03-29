// MOODMATE FUNCTION
function setMood(mood) {
    const result = document.getElementById('result');
    const lastMoodText = document.getElementById('lastMood');

    let message = '';
    switch(mood) {
        case 'Happy': message = "Yay! Keep smiling 😄"; break;
        case 'Sad': message = "It's okay to feel sad sometimes 😢"; break;
        case 'Angry': message = "Take a deep breath, stay calm 😡"; break;
        case 'Excited': message = "Awesome! Enjoy the excitement 🤩"; break;
        default: message = "Mood recorded!";
    }

    result.textContent = message;
    lastMoodText.textContent = "Last Mood: " + mood;

    result.style.opacity = 0;
    setTimeout(() => { result.style.opacity = 1; }, 50);
}