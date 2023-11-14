let i = document.getElementsByClassName("i");
let scroll1 = document.getElementsByClassName("scroll1")[0];
let icons = document.getElementsByClassName("scroll-cont")[0];
let srcauto1 = document.getElementsByClassName("srcauto")[0];
let srcauto2 = document.getElementsByClassName("srcauto")[1];
let srcauto3 = document.getElementsByClassName("srcauto")[2];
let srcauto4 = document.getElementsByClassName("srcauto")[3];
let srcauto5 = document.getElementsByClassName("srcauto")[4];
let srcauto6 = document.getElementsByClassName("srcauto")[5];
let scrollcontlg = document.getElementsByClassName("scrollcontlg")[0];
let lcount = 16;


scroll1.addEventListener("wheel", (e) => {
    e.preventDefault();
    scroll1.scrollLeft = e.deltaY;
})


setInterval(() => {
    if (icons.scrollLeft === 0 || !check) {
        icons.scrollLeft += icons.clientWidth;
        check = false;
        lcount += 16;
        if (lcount === 112) {
            check = true;
            lcount -= 16;
        }
    }

    else {
        if (check) {
            icons.scrollLeft = icons.scrollLeft - icons.clientWidth;
            lcount -= 16;
            if (lcount === 0) {
                check = false;
                lcount = 16;
            }
        }
    }

}, 3000)

scrollcontlg.addEventListener("wheel", (e) => {
    scrollcontlg.scrollLeft = e.deltaY;
})


srcauto1.addEventListener("wheel", (e) => {
    srcauto1.scrollLeft = e.deltaY;
})
srcauto2.addEventListener("wheel", (e) => {
    srcauto2.scrollLeft = e.deltaY;
})
srcauto3.addEventListener("wheel", (e) => {
    srcauto3.scrollLeft = e.deltaY;
})
srcauto4.addEventListener("wheel", (e) => {
    srcauto4.scrollLeft = e.deltaY;
})
srcauto5.addEventListener("wheel", (e) => {
    srcauto5.scrollLeft = e.deltaY;
})
srcauto6.addEventListener("wheel", (e) => {
    srcauto6.scrollLeft = e.deltaY;
})