const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Total de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Nomes dos elefantes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  test('Idade media dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  test('Localizacao Elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('Popularidade dos Elefantes', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  test('Dias visitaveis dos elefantes', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  test('Retornar undefined se vazio', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Retornar frase caso objeto vazio', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  test('Retornar null se passada string sem funcionalidade', () => {
    expect(handlerElephants('felipe')).toBeNull();
  });
});
