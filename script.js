const message = "I don’t really know where to begin, because no words could ever match how I feel about you… but I’ll try anyway. How are you, pretty baby? Have I already told you today that I love everything about you? And when I say everything, I mean everything from your skin to your pure soul. Even the parts of yourself you don’t like... I love those too. The things you see as flaws I see as beautiful pieces of the person I adore. I love you the way the moon loves to show up in every phase: half, quarter, or full. That means I love every version of you even the darker sides. And I’ll be here through all of it. I want to give you all that I have, even when you're not at your best. And in your full moon phase, when you’re feeling your fullest and brightest I want to be there, cheering you on, building dreams with you, and celebrating every moment until the hard days finally pay off. I want you to always remember where you came from to look back and reflect on how much you've grown along the way. And most of all, I want to walk beside you through it all every step, every season, every chapter. You’ll never be alone, baby. I’m yours completely. Always. I love you endlessly. 🫶🌙";

let index = 0;

function typeWriter() {
    if (index < message.length) {
        document.getElementById("message").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Adjust typing speed here
    }
}

document.getElementById("unlock-button").addEventListener("click", function() {
    const password = document.getElementById("password").value;
    if (password === "IV-V-MMXXV") { // Replace with your actual password
        document.getElementById("locked-heart").classList.add("hidden");
        document.getElementById("unlocked-heart").classList.remove("hidden");
        document.getElementById("overlay").classList.remove("hidden");
        document.getElementById("love-song").play();
        typeWriter(); // Start typing effect
    } else {
        alert("Incorrect password. Please try again.");
    }
});

document.getElementById("close-letter").addEventListener("click", function() {
    document.getElementById("overlay").classList.add("hidden");
    document.getElementById("message").innerHTML = ""; // Clear message for next time
    index = 0; // Reset index for next typing
});
