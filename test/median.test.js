import median  from "../src/median";('../src/median');

describe('median', () => {
    test('devrait calculer la médiane pour un tableau impair', () => {
        const tableau = [5, 3, 8, 1, 2, 7];
        const resultat = median(tableau);
        expect(resultat).toBe(4);
    });

    test('devrait calculer la médiane pour un tableau pair', () => {
        const tableau = [5, 3, 8, 1, 2, 7, 4];
        const resultat = median(tableau);
        expect(resultat).toBe(4);
    });

    test('devrait retourner la valeur centrale pour un tableau avec un seul élément', () => {
        const tableau = [5];
        const resultat = median(tableau);
        expect(resultat).toBe(5);
    });

    test('devrait lancer une erreur pour un tableau vide', () => {
        const tableau = [];
        expect(() => median(tableau)).toThrow("Le tableau ne doit pas être vide");
    });
});
