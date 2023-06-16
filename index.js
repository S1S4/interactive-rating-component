const ratingCard = document.querySelector(".rating-card")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit-button")
const ratings = document.querySelectorAll(".rating-button")
const actualRating = document.getElementById("rating")

submitButton.addEventListener("click", () => {
    ratingCard.style.display = "none"
    thanksContainer.classList.remove("hidden")
    
    ratings.forEach((rating) => {
        rating.addEventListener("click", () => {
            actualRating.innerHTML = rating.innerHTML
        })
    })
})