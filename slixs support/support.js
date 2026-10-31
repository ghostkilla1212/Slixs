const feedbackYes = document.querySelectorAll("feedbackYes-button")
const feedbackNo = document.querySelectorAll("feedbackNo-button")


feedbackYes.forEach(button => {
button.querySelectorAll("click", () => {
    alert ("Feedback has been send")
})
})