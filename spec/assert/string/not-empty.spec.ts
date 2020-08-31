import NotEmpty from "../../../dist/assert/string/not-empty";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(NotEmpty(true, '123456789', 'value')).toBe(
        'value is empty'
    );

});

it('true invalid', ()=>{

    expect(NotEmpty(true, '', 'value')).toBe(
        'value is empty'
    );

});

it('false valid', ()=>{

    expect(NotEmpty(false, '123456789', 'value')).toBe(
        'value 12... is not empty'
    );

});

it('false invalid', ()=>{

    expect(NotEmpty(false, '', 'value')).toBe(
        'value is not empty'
    );

});
