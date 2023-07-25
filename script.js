const burger = document.querySelector(".burger")
const burgerList = document.querySelector(".burger__list")

console.log(burger)
console.log(burgerList)

burger.addEventListener("click", function(){
    burgerList.classList.toggle("show")
})