const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
let profile = document.getElementById('profile')
let url = 'https://my-json-server.typicode.com/lykony/marketplace'

let response = fetch(`${url}/users/${id}`)
    .then(response => response.json())
    .then(data => fillHtml(data))
    .catch(error => console.log(error))

function fillHtml(user) {
    profile.innerHTML = `
    <h1>${user.name}</h1>
    <h2>${user.sirname}</h2>
    <img class="profile-img" src="${user.photo_url}">
    <p>Balance: ${user.balance}$</p>
    `
}