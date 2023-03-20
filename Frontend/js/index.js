const card = document.getElementById("best-seller-cards")
for (let i = 0; i<4 ; i++){
    card.innerHTML += `
    <div class="index-card">
      <div class="imgdiv">
        <img class="img" src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="test">
      </div>
      <div class="card-text">
        <p class="img-title">Boat Headphones</p>
        <div class="icons">
        <i class="material-icons ">star</i>
        <i class="material-icons ">star</i>
        <i class="material-icons ">star</i>
        <i class="material-icons ">star</i>
        <i class="material-icons ">star</i>
        </div>
        <p class="img-price">$ 50</p>
      </div>
    </div>
    `
}
