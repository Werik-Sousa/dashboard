let iconMenu = document.getElementById('iconMenu');
let sidebar = document.getElementById('sidebar');

let w = window.innerWidth;

window.addEventListener("resize", () => {
    w = window.innerWidth;
})

function responsiveSidebar() {
   if (w <= 768) {
        if (sidebar.style.left == '0px'){
            sidebar.style.left = '-300px';
        } else {
            sidebar.style.left = '0px';
        }
    } else {
        if (sidebar.style.display == 'none'){
            sidebar.style.display = 'block';
            mainContent.style.width = 'calc (100%-200px)';
        } else {
            sidebar.style.display = 'none';
            mainContent.style.width = '100%';
        }
        }
    }