const vardi = ["Jana Krūmiņa", "Jānis Bērziņš", "Pēteris Liepa", "Laura Ose", "Artis Priede"];
const balvas = ["Dators", "Telefons", "Kafijas automāts", "Fotoaparāts", "Automašīna"];
const naudaKopa = 1000000;
let uzvaretajuSkiats = 5;
let rindas = document.querySelector(".rindas");
for (let i=0; i<uzvaretajuSkiats; i++){
    let rand = Math.random()*vardi.length;
    rand = Math.floor(rand);
    //noapaļo uz leju
    let uzvaretajs = vardi[rand];
    rindas.innerHTML +=`
    //pievieno +. lai pieskaitītu nākamo
    <tr>
     <td>${i+1}</td>
     <td>${uzvaretajs}</td>
    </tr>`
// $ norāda mainīgo
}