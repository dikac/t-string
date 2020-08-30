import Suffix from "../../dist/boolean/suffix";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


it('suffix', ()=>{

    expect(Suffix('abcdefghij', 'fghij')).toBe(true);

});

it('suffix', ()=>{

    expect(Suffix('abcdefghij', 'abcde')).toBe(false);

});
