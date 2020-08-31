import Alphanumeric from "../../../dist/assert/string/alphanumeric";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Alphanumeric(true, 'abcd12345', 'value')).toBe(
        'value is alphanumeric'
    );

});

it('true invalid', ()=>{

    expect(Alphanumeric(true, '!@#$%^&*()_+', 'value')).toBe(
        'value is alphanumeric'
    );

});

it('false valid', ()=>{

    expect(Alphanumeric(false, '123ABC', 'value')).toBe(
        'value is not alphanumeric'
    );

});

it('false invalid', ()=>{

    expect(Alphanumeric(false, '12!@#$%^&*()_+AB', 'value')).toBe(
        'value ..!@#$%.. is not alphanumeric'
    );

});
