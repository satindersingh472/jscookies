let button = document.getElementById(`click_button`);
button.addEventListener(`click`, cookie_func);

function cookie_func(details){
Cookies.set(`button_clicked` , `yes`);
}
