const menu = document.querySelector(".menu");
const dropdown = document.querySelector("#dropdown");


menu.addEventListener('click', () => {
    dropdown.classList.toggle("show")
})


























// window.onclick = function (event) {
//     if (!event.target.matches('.menu')) {
//         var dropdowns = document.getElementsByClassName("display");
//         var i;
//         for (i = 0; dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }
// changeDisplay();