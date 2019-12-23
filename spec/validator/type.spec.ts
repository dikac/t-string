import Type from "../../dist/validator/type";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("type validator", function() {

    let type = new Type('data');

    it(`validate integer`, () => {

        let result = type.validate(1);

        expect(result.valid).toBe(false);
        expect(result.message).toBe('"data" type expect string, "number" given');

        try {
            let data = result.value;
            fail('accessing invalid data should throw exception')
        } catch (e) {
            expect(e instanceof Error).toBe(true);
        }
    });

    it(`validate string`, () => {

        let result = type.validate('hello world');

        expect(result.valid).toBe(true);
        expect(result.value).toBe('hello world');
        expect(result.message).toBe('"data" type is string');

    });
});




