document.addEventListener('DOMContentLoaded', () => {
    const jokeElement = document.getElementById('joke');
    const jokeButton = document.getElementById('jokeButton');

    async function fetchJoke() {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jokeData = await response.json();
            jokeElement.textContent = `${jokeData.setup} - ${jokeData.punchline}`;
        } catch (error) {
            jokeElement.textContent = 'Sorry, something went wrong!';
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    jokeButton.addEventListener('click', fetchJoke);
    fetchJoke();
});

