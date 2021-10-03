document.getElementById("nav_click").addEventListener("click", function toggle(){ 
    const tempMenu = document.getElementById("nav_r");
    tempMenu.style.display = (tempMenu.style.display === 'none') ? 'flex' : 'none'
});