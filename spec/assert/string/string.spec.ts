import String_ from "../../../dist/assert/string/string";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

let data = new Map<[boolean, any, string?], string>();

data.set([true, 'string'], 'type is string.');
data.set([true, 'string', 'value'], 'value is string.');
data.set([true, []], 'type is string.');
data.set([true, {}], 'type is string.');

data.set([false, 'string'], 'type must string, actual string.');
data.set([false, 'string', 'value'], 'value must string, actual string.');
data.set([false, []], 'type must string, actual object.');
data.set([false, {}], 'type must string, actual object.');


let i = 0;
for(let [args, message] of data) {

    it(`test data[${i}]`, ()=>{

        expect(String_(...args)).toBe(message);

    });

    i++;
}
