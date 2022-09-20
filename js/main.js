const submitBtn = document.querySelector(".btn");
const thanksContainer = document.querySelector(".thankYou");
const mainContainer = document.querySelector(".main");
const rateResult = document.getElementById("rateResult");
const rating = document.querySelectorAll(".rating");

rating.forEach((rate) => {
    rate.addEventListener("click", () => {
        rateResult.innerHTML = rate.innerHTML;

        submitBtn.addEventListener("click", () => {
            mainContainer.classList.add("hidden");
            thanksContainer.classList.remove("hidden");
        });
    });
});
