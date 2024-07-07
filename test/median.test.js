import median from '../src/median'

describe('calculerMediane', () => {
    it('devrait calculer la médiane pour un tableau impair', () => {
        const tableau = [5, 3, 8, 1, 2, 7];
        const resultat = median(tableau);
        expect(resultat).to.equal(4);
    });

    it('devrait calculer la médiane pour un tableau pair', () => {
        const tableau = [5, 3, 8, 1, 2, 7, 4];
        const resultat = median(tableau);
        expect(resultat).to.equal(4);
    });

    it('devrait retourner la valeur centrale pour un tableau avec un seul élément', () => {
        const tableau = [5];
        const resultat = median(tableau);
        expect(resultat).to.equal(5);
    });

    it('devrait lancer une erreur pour un tableau vide', () => {
        const tableau = [];
        expect(() => median(tableau)).to.throw(Error, "Le tableau ne doit pas être vide");
    });
});
