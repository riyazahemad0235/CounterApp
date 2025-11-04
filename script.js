let countButton = document.body.querySelector(".countButton");
let count = 0;
let displayCount=document.body.querySelector(".displayCount")
countButton.addEventListener("click", () => {
    Animation=()=>{
        displayCount.classList.add("animation")
        setTimeout(()=>{
            displayCount.classList.remove("animation")
        },100)
    }
    count += 1;
    displayCount.innerText=count
    Animation()
});
