function cookie_func(details) {
    Cookies.set(`button_clicked`, `yes`);
}
let button = document.getElementById(`click_button`);
button.addEventListener(`click`, cookie_func);


let cookie_value = Cookies.get(`button_clicked`);
if (cookie_value !== undefined) {
    document[`body`][`innerHTML`] += `<h1> congrats you baked a cookie</h1>`;
}
 else {
    document[`body`].insertAdjacentHTML(`beforeEnd` , `<h1>no cookies</h1>`);
}
function close_cookie(details){
    Cookies.remove(`button_clicked`);
}
let close_it = document.getElementById(`close_button`);
close_it.addEventListener(`click`, close_cookie);

function cookie_update(details){
    Cookies.set(`button_clicked` , `updated`);
}
let new_cookie = document.getElementById(`update`);
new_cookie.addEventListener(`click`,cookie_update);