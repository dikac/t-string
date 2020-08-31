import String_ from "../../../dist/assert/string/string";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

data.set([true, 'string'], 'type is string');
data.set([true, 'string', 'value'], 'value is string');
data.set([true, []], 'type is string');
data.set([true, {}], 'type is string');

data.set([false, 'string'], 'type string is not string');
data.set([false, 'string', 'value'], 'value string is not string');
data.set([false, []], 'type object is not string');
data.set([false, {}], 'type object is not string');


let i = 0;
for(let [args, message] of data) {

    it(`test data[${i}]`, ()=>{

        expect(String_(...args)).toBe(message);

    });

    i++;
}
