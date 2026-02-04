console.log('heloooo')

const apiURL = 'https://fdnd.directus.app/items/person/286'
const parentElement = document.querySelector('main')

parentElement.classList.add('loading') //loading state

fetchJson(apiURL).then(function(response) {
    console.log(response.data)
    parentElement.innerHTML = `
    <article>
        <h2>${response.data.name}</h2>
        <p>${response.data.nickname}</p>
        <p>${response.data.bio}</p>
        <p>${response.data.birthdate}<p/>
        <p>${response.data.website}<p/>
    <article/>
    `
    parentElement.classList.remove('loading') //finish state - progressive enhancement
})

async function fetchJson(url, payload = {}) {
    return await fetch(url, payload)
      .then((response) => response.json())
      .catch((error) => error)
  }


