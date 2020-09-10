import Empty from "../../../dist/assert/string/empty";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Empty(true, '', 'value')).toBe(
        'value is empty string.'
    );

});

it('true invalid', ()=>{

    expect(Empty(true, '123456789', 'value')).toBe(
        'value is empty string.'
    );

});

it('false valid', ()=>{

    expect(Empty(false, '', 'value')).toBe(
        'value must empty string.'
    );

});

it('false invalid', ()=>{

    expect(Empty(false, '123456789', 'value')).toBe(
        'value must empty string, actual "12345...".'
    );

});
