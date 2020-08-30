import Prefix from "../../dist/boolean/prefix";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


it('prefix', ()=>{

    expect(Prefix('abcdefghij', 'abcde')).toBe(true);

});

it('suffix', ()=>{

    expect(Prefix('abcdefghij', 'fghij')).toBe(false);

});
