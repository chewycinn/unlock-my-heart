document.getElementById('unlock-button').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    const correctPassword = "yourPassword"; // Set your password here

    if (password === correctPassword) {
        unlockHeart();
    } else {
        alert("Incorrect password. Please try again.");
    }
});

function unlockHeart() {
    // Hide the locked heart and chain
    document.getElementById('locked-heart').classList.add('hidden');
    document.getElementById('chain').classList.add('hidden');
    document.getElementById('unlocked-heart').classList.remove('hidden');

    // Play the love song
    const loveSong = document.getElementById('love-song');
    loveSong.play();

    // Show the overlay with the letter
    document.getElementById('overlay').classList.remove('hidden');

    // Set the letter content
    const letterContent = `
        <p>Dear my wife Shareign,</p>
        <p>I don’t really know where to begin, because no words could ever match how I feel about you… but I’ll try anyway.</p>
        <p>How are you, pretty baby?</p>
        <p>Have I already told you today that I love everything about you?</p>
        <p>And when I say everything, I mean everything from your skin to your pure soul.</p>
        <p>Even the parts of yourself you don’t like... I love those too. The things you see as flaws I see as beautiful pieces of the person I adore.</p>
        <p>I love you the way the moon loves to show up in every phase: half, quarter, or full.</p>
        <p>That means I love every version of you, even the darker sides. And I’ll be here through all of it. I want to give you all that I have, even when you're not at your best.</p>
        <p>And in your full moon phase, when you’re feeling your fullest and brightest, I want to be there, cheering you on, building dreams with you, and celebrating every moment until the hard days finally pay off.</p>
        <p>I want you to always remember where you came from to look back and reflect on how much you've grown along the way.</p>
        <p>And most of all, I want to walk beside you through it all — every step, every season, every chapter.</p>
        <p>You’ll never be alone, baby. I’m yours — completely. Always.</p>
        <p>I love you endlessly. 🫶🌙</p>
    `;

    // Display the letter content with a typewriter effect
    typeWriter(letterContent, 0);
}

function typeWriter(text, i) {
    if (i < text.length) {
        document.getElementById('letter-content').innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, i), 50); // Adjust speed here
    }
}

// Close the letter overlay
document.getElementById('close-letter').addEventListener('click', function() {
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('letter-content').innerHTML = ""; // Clear the letter content
});
