import Digit from "../../../dist/assert/string/digit";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Digit(true, '0123456789', 'value')).toBe(
        'value is digit'
    );

});

it('true invalid', ()=>{

    expect(Digit(true, '0123456789', 'value')).toBe(
        'value is digit'
    );

});

it('false valid', ()=>{

    expect(Digit(false, '0123456789', 'value')).toBe(
        'value is not digit'
    );

});

it('false invalid', ()=>{

    expect(Digit(false, '0123ABCD456E789', 'value')).toBe(
        'value ..ABCD.. is not digit'
    );

});
