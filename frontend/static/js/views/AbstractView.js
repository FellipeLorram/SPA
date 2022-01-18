export default class {
    constructor(params) {
        this.params = params

    }

    setTitle(title) {
        document.title = title
    }

    async getEjs() {
        return "";
    }



    frontEndEvents() {
        const toggleSideBar = document.querySelector('.top_bar_toggle');
        const main = document.querySelector('.main');
        const navigation = document.querySelector('.navigation');
        toggleSideBar.addEventListener('click', () => {
            navigation.classList.toggle('active');
            main.classList.toggle('active');
        });

        const open_with = document.querySelector('.open_with');
        const open_with_left_side = document.querySelector('.open_with_left_side');

        open_with.addEventListener('click', e => {
            if (window.screen.width <= 768) {
                e.target.parentElement.style.top = "70%";
                e.target.style.display = "none";
                open_with_left_side.style.display = "block";
            } else {
                e.target.parentElement.style.left = "calc(100vw - 25%)";
                e.target.style.display = "none";
                open_with_left_side.style.display = "block";
            }
        });

        open_with_left_side.addEventListener('click', e => {

            if (window.screen.width <= 768) {
                e.target.parentElement.style.top = "10%";
                e.target.style.display = "none";
                open_with.style.display = "block";
            } else {
                e.target.parentElement.style.left = "35px";
                e.target.style.display = "none";
                open_with.style.display = "block";
            }

        });
        /*                  Esconder NavBar                      */
        const adNewContentPostIt = document.querySelector('#add_New_Content_post_it')

        let prevPageYOfsset = window.pageYOffset;
        window.onscroll = () => {
            let currentPageYOfsset = window.pageYOffset;

            if (prevPageYOfsset > currentPageYOfsset) {
                document.querySelector(".main_top_bar").style.top = "0";
                document.querySelector(".navigation_mobile").style.bottom = "0";
                adNewContentPostIt.classList.remove('desactive');
            }
            else {
                document.querySelector(".main_top_bar").style.top = "-100px";
                document.querySelector(".navigation_mobile").style.bottom = "-100px";
                adNewContentPostIt.classList.add('desactive');
                adNewContentPostIt.classList.remove('active');
                adNewContentPostIt.querySelector('#post_it_icon').classList.add('icon_rotate');

            }
            prevPageYOfsset = currentPageYOfsset;

            if (document.querySelector(".main_top_bar").style.top == "-100px") {
                setTimeout(() => {
                    document.querySelector(".main_top_bar").style.top = "0";
                    document.querySelector(".navigation_mobile").style.bottom = "0";
                    adNewContentPostIt.classList.remove('desactive');
                }, 1563);
                adNewContentPostIt.querySelector('#post_it_icon').classList.remove('icon_rotate');
            }
        }
    }

}
