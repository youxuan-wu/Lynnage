// 获取按钮元素
const story1Button = document.getElementById('story1Button');
const story2Button = document.getElementById('story2Button');
const story3Button = document.getElementById('story3Button');

// 获取内容元素
const story1Content = document.querySelector('.story1');
const story2Content = document.querySelector('.story2');
const story3Content = document.querySelector('.story3');

// 给按钮添加点击事件监听器
story1Button.addEventListener('click', () => {
    story1Content.classList.remove('hidden');
    story2Content.classList.add('hidden');
    story3Content.classList.add('hidden');
});

story2Button.addEventListener('click', () => {
    story1Content.classList.add('hidden');
    story2Content.classList.remove('hidden');
    story3Content.classList.add('hidden');
});

story3Button.addEventListener('click', () => {
    story1Content.classList.add('hidden');
    story2Content.classList.add('hidden');
    story3Content.classList.remove('hidden');
});







// function changePageColor(pageNumber) {
//     const pages = document.querySelectorAll('ul li');

//     // 遍历所有页面，并将它们的背景色重置为白色
//     pages.forEach((page, index) => {
//         if (index + 1 === pageNumber) {
//             // 如果是点击的页面，则将背景色设为 #DED1B4
//             page.style.backgroundColor = '#DED1B4';
//         } else {
//             // 否则将背景色设为白色
//             page.style.backgroundColor = 'white';
//         }
//     });
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const seriesNames = document.querySelectorAll(".item p[data-series]");
//     const seriesSections = document.querySelectorAll(".item .series");

//     seriesNames.forEach(seriesName => {
//         seriesName.addEventListener("click", function() {
//             const series = this.getAttribute("data-series");
//             seriesSections.forEach(section => {
//                 section.style.display = "none";
//             });
//             document.querySelector(`.item .series.${series}`).style.display = "grid";
//         });
//     });
// });
