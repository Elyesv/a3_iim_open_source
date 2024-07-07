/**
 * Calcule la médiane d'un tableau de nombres.
 *
 * La médiane est la valeur qui sépare la moitié supérieure des valeurs
 * de la moitié inférieure. Si le tableau a un nombre pair d'éléments,
 * la médiane est la moyenne des deux valeurs centrales.
 *
 * @param {number[]} numbers - Un tableau de nombres.
 * @returns {number} - La médiane du tableau.
 * @throws {Error} - Lance une erreur si le tableau est vide.
 */

export default function median(numbers) {
    if (numbers.length === 0) {
        throw new Error("Le tableau ne doit pas être vide");
    }

    numbers.sort((a, b) => a - b);

    const half = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        return (numbers[half - 1] + numbers[half]) / 2;
    } else {
        return numbers[half];
    }
}


