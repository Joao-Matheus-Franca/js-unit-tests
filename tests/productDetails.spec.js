const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object');
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    for (let i = 0; i < productDetails('Alcool gel', 'Máscara').length; i += 1) {
    expect(typeof productDetails('Alcool gel', 'Máscara')[i]).toBe('object');
    };
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toBe(productDetails('Alcool gel', 'Máscara')[1]);
    for (let id = 0; id < productDetails('Alcool gel', 'Máscara').length; id += 1) {
    expect(productDetails('Alcool gel', 'Máscara')[id]['details']['productId'].endsWith('123')).toBe(true);
    }
  });
});
