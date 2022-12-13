// get elements
const new_account_btn = document.querySelector('.new-btn a');
const sign_up = document.getElementById('sign-up')
const body = document.body;
const close = document.querySelector('.close');

// signup birth dates select fields
const birth_date = document.getElementById('birth_date');
const birth_month = document.getElementById('birth_month');
const birth_year = document.getElementById('birth_year');

// sign up btn
new_account_btn.onclick = (e) => {
    e.preventDefault();
    sign_up.style.display = "flex";
    body.style.overflow = "hidden"
}
// signup close btn
close.onclick = () => {
    sign_up.style.display = "none";
    body.style.overflow = ""
}

// birth date (year) select fields

const date = new Date(); // init full date and time
const present_year = date.getFullYear(); // init present year

// push last 80 years form present year
for (let i = present_year; i >= present_year - 80; i--) {
    birth_year.insertAdjacentHTML("beforeend",`<option value="${i}" ${i == present_year ? `selected` : ''}>${i}</option>`);
}

// months name
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// push all month name into birth month field
months.forEach((item, index) => {
    birth_month.insertAdjacentHTML('beforeend', `<option value="${item}" ${index == date.getMonth() ? `selected` : ''}>${item}</option>`)
});
// ${item == present_year ? `selected` : ''}
// push 31 days into birth day field
for (let i = 1; i <= 31; i++) {
    birth_date.insertAdjacentHTML("beforeend",`<option value="${i}" ${i == date.getDate() - 1 ? `selected` : ''}>${i}</option>`);
}