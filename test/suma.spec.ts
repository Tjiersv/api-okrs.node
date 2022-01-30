import { suma } from '../src/routes/routes';

describe('Suma', () => {

    it('success', () => {
        expect(suma(1, 2)).toBe(3);
    });

});