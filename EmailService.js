emailjs.init("-gtAz8swkgfgUrsZU");

const COOLDOWN_MS = 60000;
let lastSentTime = 0;

function sendEmail() {
    const now = Date.now();

    if (now - lastSentTime < COOLDOWN_MS) {
        const secondsLeft = Math.ceil((COOLDOWN_MS - (now - lastSentTime)) / 1000);
        alert(`Please wait ${secondsLeft} seconds before sending again.`);
        return;
    }

    const name = document.querySelector('input[placeholder="Your name"]').value;
    const email = document.querySelector('input[placeholder="Your email"]').value;
    const message = document.querySelector('textarea[placeholder="Your message"]').value;

    if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
    }

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
    };

    emailjs.send("service_kyny4km", "template_g8826i8", templateParams)
        .then(() => {
            alert("Message sent! I'll get back to you soon 💛");

            let name = document.getElementById("nameInput");
            let email = document.getElementById("emailInput");
            let message = document.getElementById("messageInput");

            name.value = "";
            email.value = "";
            message.value = "";
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            alert("Something went wrong. Please try again.");
        });
}