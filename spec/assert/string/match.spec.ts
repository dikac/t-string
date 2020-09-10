import Match from "../../../dist/assert/string/match";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Match(true, 'abcd', /^[a-zA-Z]*$/,'value')).toBe(
        'value "abcd" match against ^[a-zA-Z]*$.'
    );

});

it('true invalid', ()=>{

    expect(Match(true, '123456789', /^[a-zA-Z]*$/,'value')).toBe(
        'value "12345..." match against ^[a-zA-Z]*$.'
    );

});

it('false valid', ()=>{

    expect(Match(false, 'abcded', /^[a-zA-Z]*$/,'value')).toBe(
        'value "abcded" does not match against ^[a-zA-Z]*$.'
    );

});

it('false invalid', ()=>{

    expect(Match(false, '123456789', /^[a-zA-Z]*$/,'value')).toBe(
        'value "12345..." does not match against ^[a-zA-Z]*$.'
    );

});
