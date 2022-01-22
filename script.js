async function getData() {
    let url = "https://collectionapi.metmuseum.org/public/collection/v1/objects/436121"
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}

async function renderData() {
    let data = await getData();
    let html = `<div class="info-container">
                    <div class="frame">
                        <img class="painting" src="${data.primaryImage}" />
                    </div>
                    <h2 class="title">${data.title}</h2>
                    <h3 class="artist">by ${data.artistDisplayName}</h3>
                </div>`;
    let container = document.querySelector('.container');
    container.innerHTML = html
}

renderData();