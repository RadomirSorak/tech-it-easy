// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

// Opdracht 2a:

let result = 0

for (let i = 0; i < inventory.length; i++) {
    result = result + inventory[i].sold
}
console.log(result);

// Opdracht 2b:

const soldTvs = document.getElementById("container");

const soldTvsTitle = document.createElement("h3");
soldTvsTitle.textContent = "Aantal verkochte tv's";

const allSoldTvs = document.createElement("h4");
allSoldTvs.textContent = result;
allSoldTvs.setAttribute("class", "result-color")

soldTvs.appendChild(soldTvsTitle);
soldTvs.appendChild(allSoldTvs);

// Opdracht 2c:

let output = 0;

for (let i = 0; i < inventory.length; i++) {
    output = output + inventory[i].originalStock;
}
console.log(output);

// Opdracht 2d:

const container2 = document.getElementById("container2");

const tvsInStock = document.createElement("h3");
tvsInStock.textContent = "Aantal tv's";

const numberTvsInStock = document.createElement("h4");
numberTvsInStock.textContent = output;
numberTvsInStock.setAttribute("class", "output-color")

container2.appendChild(tvsInStock);
container2.appendChild(numberTvsInStock);

// Opdracht 2e:

const container3 = document.getElementById("container3");

const currentStock = document.createElement("h3");
currentStock.textContent = "Nog te verkopen tv's";

const currentStockNumber = document.createElement("h4");
currentStockNumber.textContent = `${output - result}`;
currentStockNumber.setAttribute("class", "sellcolor")

container3.appendChild(currentStock);
container3.appendChild(currentStockNumber);