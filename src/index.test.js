const {
    plus,minus,multiply,div
} = require('./index')

describe('Math', ()=> {
    it('plus', ()=>{
        expect(plus(2,2)).toBe(4)
    })

    it('minus', ()=>{
        expect(minus(2,2)).toBe(0)
    })

    it('multiply', ()=>{
        expect(multiply(2,2)).toBe(4)
    })

    it('div', ()=>{
        expect(div(8,2)).toBe(4)
    })
})