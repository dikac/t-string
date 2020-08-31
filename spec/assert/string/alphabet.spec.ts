import Alphabet from "../../../dist/assert/string/alphabet";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Alphabet(true, 'abcd', 'value')).toBe(
        'value is alphabet'
    );

});

it('true invalid', ()=>{

    expect(Alphabet(true, '123456789', 'value')).toBe(
        'value is alphabet'
    );

});

it('false valid', ()=>{

    expect(Alphabet(false, 'abcded', 'value')).toBe(
        'value is not alphabet'
    );

});

it('false invalid', ()=>{

    expect(Alphabet(false, '123456789', 'value')).toBe(
        'value ..12345.. is not alphabet'
    );

});
