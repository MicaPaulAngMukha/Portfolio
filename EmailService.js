emailjs.init("-gtAz8swkgfgUrsZU");

function sendEmail() {
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
        })
        .catch((error) => {
            console.error("EmailJS error:", error);
            alert("Something went wrong. Please try again.");
        });
}