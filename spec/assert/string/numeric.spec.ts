import Numeric from "../../../dist/assert/string/numeric";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Numeric(true, '0123456789', 'value')).toBe(
        'value is numeric.'
    );

});

it('true invalid', ()=>{

    expect(Numeric(true, '0123456789', 'value')).toBe(
        'value is numeric.'
    );

});

it('false valid', ()=>{

    expect(Numeric(false, '0123456789', 'value')).toBe(
        'value must numeric.'
    );

});

it('false invalid', ()=>{

    expect(Numeric(false, '0123ABCD456E789', 'value')).toBe(
        'value must numeric, contain "ABCD".'
    );

});
