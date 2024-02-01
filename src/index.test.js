const {
    plus,minus,multiply,div
} = require('./index')

describe('Math', ()=> {
    it('plus', ()=>{
        expect(plus(2,2)).toBe(4)
    })
})