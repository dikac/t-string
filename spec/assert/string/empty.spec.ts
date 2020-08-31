import Empty from "../../../dist/assert/string/empty";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Empty(true, '', 'value')).toBe(
        'value is empty'
    );

});

it('true invalid', ()=>{

    expect(Empty(true, '123456789', 'value')).toBe(
        'value is empty'
    );

});

it('false valid', ()=>{

    expect(Empty(false, '', 'value')).toBe(
        'value is not empty'
    );

});

it('false invalid', ()=>{

    expect(Empty(false, '123456789', 'value')).toBe(
        'value 12345... is not empty'
    );

});
