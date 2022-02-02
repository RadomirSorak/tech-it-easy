// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
//     Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

// Opdracht 1a:

const tvName = inventory.map((tv) => {
    return tv.name
})

console.log(tvName);

// Opradcht 1b:

const soldOut = inventory.filter((sold) => {
    return sold.originalStock === sold.sold
})

console.log(soldOut);

// Opdracht 1c:

const ambiLight = inventory.filter((ambi) => {
    return ambi.options.ambiLight === true
})

console.log(ambiLight);

// Opdracht 1d:

function sortArray(sortPrice) {
    return sortPrice.sort((a,b) => {
        if (a.price - b.price > 0 ){
            return 1;
        } else if (a.price - b.price < 0){
            return -1;
        } else {
            return 0;
        }
    })
}
console.log(sortArray(inventory));