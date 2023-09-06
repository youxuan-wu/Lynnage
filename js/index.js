function changePageColor(pageNumber) {
    const pages = document.querySelectorAll('ul li');

    // 遍历所有页面，并将它们的背景色重置为白色
    pages.forEach((page, index) => {
        if (index + 1 === pageNumber) {
            // 如果是点击的页面，则将背景色设为 #DED1B4
            page.style.backgroundColor = '#DED1B4';
        } else {
            // 否则将背景色设为白色
            page.style.backgroundColor = 'white';
        }
    });
}