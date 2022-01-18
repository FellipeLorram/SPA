export default ({ navigateTo }) => {
    document.querySelectorAll('.nav_link').forEach(link => {
        if (window.location.href === link.href) link.classList.add('active');
    });

    document.querySelectorAll('.icon_mobile_container').forEach(icon => {
        const link = icon.querySelector('a');
        if (window.location.href === link.href) icon.classList.add('active');
    });


    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();

            document.querySelectorAll('.nav_link').forEach(link => {
                link.classList.remove('active');
            });

            document.querySelectorAll('.icon_mobile_container').forEach(icon => {
                icon.classList.remove('active');
            });

            navigateTo(e.target.href);
            if (window.location.href === e.target.href && !e.target.parentElement.classList.contains('icon_mobile_container')) {
                console.log(1)
                e.target.classList.add('active');
            }

        }

        if (e.target.matches("[class='link_text']") || e.target.matches("[class='material-icons link_icon']") || e.target.matches("[class='material-icons link_icon_mobile']")) {
            e.preventDefault();

            document.querySelectorAll('.nav_link').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelectorAll('.icon_mobile_container').forEach(icon => {
                icon.classList.remove('active');
            });
            if (!e.target.parentElement.parentElement.classList.contains('icon_mobile_container')) e.target.parentElement.classList.add('active');
            else e.target.parentElement.parentElement.classList.add('active');
            navigateTo(e.target.parentElement.href);
        }

        

    });


}