const poke = require('./pokeList.js').pokeList;
//เริ่มเขียนต่อจากตรงนี้
const pokefire = (pokelist) => {
    let arr = []
    for (let element of pokelist) {
        if (element !== null && element.type === 'fire') {
            console.log(element.name)
            arr.push(element)
            arr.sort(function (a, b) {
                return a.id - b.id
            });
        }
    }
    return arr
}

const pokeMostAtk = (pokelist) => {

    let result = [];
    let mostAtk;
    let type;
    pokelist.sort(function (a, b) {
        return a?.type.localeCompare(b?.type)
    }).forEach(function (element) {
        if (element !== null && element !== undefined) {
            if (element.type == null || element.type !== type) {

                if (element.type !== type && mostAtk !== undefined) {
                    result.push(mostAtk);
                }
                mostAtk = element;
                type = element.type;
            }
            if (mostAtk.atk < element.atk) {
                mostAtk = element;
            }

        }
    });
    result.push(mostAtk);
    result.sort(function (a, b) {return b.atk - a.atk});
    return result;
}

console.log(pokefire(poke))
console.log(pokeMostAtk(poke))
