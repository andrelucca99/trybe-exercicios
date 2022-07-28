const { test } = require('@jest/globals')
const service = require('./service');

test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    service.numAleatorios = jest.fn().mackReturnValue(10);

    expect(service.numAleatorios()).toBe(10);
    expect(service.numAleatorios).toHaveCalled();
    expect(service.numAleatorios).toHaveCalledTimes(1);
});