export const button = document.getElementById("main-link");

const scrolling = () => {
    const y = window.scrollY;
    console.log(y);
    if (y >= 140) {
        button.style.display = "block"
    } else {
        button.style.display = "none"
    }
};
export default scrolling
window.addEventListener("scroll", scrolling);