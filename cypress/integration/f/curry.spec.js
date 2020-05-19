import * as f from '@f'

describe('curry', function() {
  it('funções curried com um único valor', function() {
    const r = f.curry(function (a, b, c) { return (a + b) / c })
    const g = r(10)

    expect(g(2, 2)).to.equal(6)
  })

  it('funções curried com multiplos valores', function() {
    const r = f.curry(function (a, b, c) { return (a + b ) / c })
    const g = r(10)
    const h = r(10, 2)

    expect(g(2, 2)).to.equal(6)
    expect(h(2)).to.equal(6)
  })

  it('permite parametros adicionais a funções curried', function() {
    const r = f.curry(f.arity(3, function (a, b, c, d) { return (a + b * c) / d }))
    const g = r(12)
    const h = g(3)

    expect(g(3, 6, 2)).to.equal(15)
    expect(h(6, 2)).to.equal(15)
    expect(g(3)(6, 2)).to.equal(15)
  })

  it('retorna a quantidade de parametros restante de funções curried', function() {
    const r = f.curry(function (a, b, c) { return (a + b) / d })
    const g = r(10)
    const h = g(2)

    expect(r).to.be.have.length.of.at.most(3)
    expect(g).to.be.have.length.of.at.most(2)
    expect(h).to.be.have.length.of.at.most(1)
    expect(g(2)).to.be.have.length.of.at.most(1)
  })

  it('preserva o contexto', function() {
    var context = { x: 10 }
    var r = function (a, b) { return a + b * this.x }
    var g = f.curry(r)

    expect(g.call(context, 2, 4)).to.equal(42)
    expect(g.call(context, 2).call(context, 4)).to.equal(42)
  })

  it('suporta espaço f.__ reservado', function() {
    const r = function (a, b, c) { return [a, b, c] }
    const g = f.curry(r)
    const _ = f.__

    expect(g(1)(2)(3)).to.deep.equal([1, 2, 3])
    expect(g(1)(2, 3)).to.deep.equal([1, 2, 3])
    expect(g(1, 2)(3)).to.deep.equal([1, 2, 3])
    expect(g(1, 2, 3)).to.deep.equal([1, 2, 3])

    expect(g(_, 2, 3)(1)).to.deep.equal([1, 2, 3])
    expect(g(1, _, 3)(2)).to.deep.equal([1, 2, 3])
    expect(g(1, 2, _)(3)).to.deep.equal([1, 2, 3])

    expect(g(1, _, _)(2)(3)).to.deep.equal([1, 2, 3])
    expect(g(_, 2, _)(1)(3)).to.deep.equal([1, 2, 3])
    expect(g(_, _, 3)(1)(2)).to.deep.equal([1, 2, 3])

    expect(g(1, _, _)(2, 3)).to.deep.equal([1, 2, 3])
    expect(g(_, 2, _)(1, 3)).to.deep.equal([1, 2, 3])
    expect(g(_, _, 3)(1, 2)).to.deep.equal([1, 2, 3])

    expect(g(1, _, _)(_, 3)(2)).to.deep.equal([1, 2, 3])
    expect(g(_, 2, _)(_, 3)(1)).to.deep.equal([1, 2, 3])
    expect(g(_, _, 3)(_, 2)(1)).to.deep.equal([1, 2, 3])

    expect(g(_, _, _)(1, 2, 3)).to.deep.equal([1, 2, 3])
    expect(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3)).to.deep.equal([1, 2, 3])
  })

  it('funções curried aceitam parametros extras', function() {
    const r = function(a, b, c) { return [...arguments] }
    const g = f.curry(r)

    expect(g(1, 2, 3)).to.deep.equal([1, 2, 3])
    expect(g(1, 2, 3, 4)).to.deep.equal([1, 2, 3, 4])
    expect(g(1, 2)(3, 4)).to.deep.equal([1, 2, 3, 4])
    expect(g(1)(2, 3, 4)).to.deep.equal([1, 2, 3, 4])
    expect(g(1)(2)(3, 4)).to.deep.equal([1, 2, 3, 4])
  })
})
