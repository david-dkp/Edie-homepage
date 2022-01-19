const hamburgerButton = document.querySelector(".navigation__hamburger-button")
const navigationList = document.querySelector(".navigation__list")
const navigationLinks = document.querySelectorAll(".navigation__list a")
const navigationMobileScrim = document.querySelector(
    ".navigation__mobile-menu-scrim"
)

const toggleMenu = () => {
    navigationList.classList.toggle("opened")
    navigationMobileScrim.classList.toggle("visible")
}

//Setup hamburger menu
hamburgerButton.onclick = toggleMenu
for (link of navigationLinks) {
    link.onclick = toggleMenu
}

navigationMobileScrim.onclick = toggleMenu

//Setup smooth scrolling to anchor
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        })
    })
})
