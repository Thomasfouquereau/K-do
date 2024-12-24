const card = [
    {
        id: 1,
        name: "Bon d'achat",
        pv: 500,
        nameimg: "Bon d'achat 500€",
        description: "Vous pouvez utiliser ce bon d'achat d'un n'importe quel magasin",
        clause: "*si vous ne dites pas anticonstitutionnellement 5 fois dans les 5.67 secondes après l'ouverture ce bon d'achat devient caduque **peux quand même être utilisé chez A-TechPro"
    },
    {
        id: 2,
        name: "Rien domage ",
        pv: 0,
        img: "cat",
        description: "tu n'as sûrement pas dû être sage cette année tu n'auras rien du tout",
        clause: ""
    },
    {
        id: 3,
        name: "designe offert",
        pv: 500,
        nameimg: "Bon d'achat 500€",
        description: "Vous pouvez utiliser ce bon d'achat d'un n'importe quel magasin",
        clause: "*ne peux être utilisé que chez A-TechPro **faut pouvoir lire ses caractères pour l'utiliser よく遊ぶ"
    },
    {
        id: 4,
        name: "site web offert",
        pv: 500,
        nameimg: "Bon d'achat 500€",
        description: "Vous pouvez utiliser ce bon d'achat d'un n'importe quel magasin",
        clause: "*ne peux être utilisé que chez A-TechPro**il faut être capable de faire un salto arrière pour l'utiliser ***ne peux être utilisé que pour un site web de 5 pages ou moins"
    }
]

window.onload = function () {
    const randomIndex = Math.floor(Math.random() * card.length);
    const selectedCard = card[randomIndex];
    console.log(selectedCard);

    const content = document.getElementById("cardBorder");

    content.innerHTML = `

    <div id="card">
        <div class="card-name">
            <h4 class="card-title">${selectedCard.name}</h4>
            <span class="card-pv">pv ${selectedCard.pv}</span>
        </div>
        <img class="card-img" src="asset/${selectedCard.img}.jpg" class="card-img-top" alt="${selectedCard.nameimg}">
        <div class="card-body">
            <p class="card-text">${selectedCard.description}</p>
            </div>
        <div class="card-footer">
            <p class="card-text">${selectedCard.clause}</p>
            </div>
        </div>
    </div>

    `;
};


