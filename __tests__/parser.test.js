import parseCoordinates from '../src/js/parser';

describe('parseCoordinates', () => {
    test('coordinates with space', () => {
        const result = parseCoordinates('51.50851, -0.12572');

        expect(result).toEqual({
        lat: 51.50851,
        lng: -0.12572,
        });
    });

    test('coordinates without space', () => {
        const result = parseCoordinates('51.50851,-0.12572');

        expect(result).toEqual({
        lat: 51.50851,
        lng: -0.12572,
        });
    });

    test('coordinates with brackets', () => {
        const result = parseCoordinates('[51.50851, -0.12572]');

        expect(result).toEqual({
        lat: 51.50851,
        lng: -0.12572,
        });
    });

    test('invalid coordinates', () => {
        expect(() => {
        parseCoordinates('test');
        }).toThrow();
    });
});