const h2 = document.querySelector("#h2_demo");
const body = document.querySelector("body")
h2.textContent = "QuangCoder"
h2.addEventListener("mouseover",function()
{
    body.classList.toggle("active");
})