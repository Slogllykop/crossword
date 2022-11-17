const reveal = document.querySelector('.reveal');
const answers = document.querySelectorAll('.answers');
reveal.addEventListener('click', () => {
    console.log("test");
    answers.forEach(answer => {
        if (answer.style.display === "block") {
            answer.style.display = "none";
            reveal.textContent = "Show Answers";
        } else {
            reveal.textContent = "Hide Answers";
            answer.style.display = "block";
        }
    });
});