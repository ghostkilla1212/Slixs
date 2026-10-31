const feedbackYes = document.querySelectorAll(".feedback-btn")
const feedbackNo = document.querySelectorAll(".feedback-btn")


feedbackYes.forEach(button => {
button.addEventListener("click", () => {
    alert ("Feedback has been send")
})
})