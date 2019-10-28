import UpperFirst from "../src/upper-first";
import Trim from "../src/trim";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("trim", function() {


    it(`trim to abcde`, () => expect(Trim('[abcde]', '[]')).toBe('abcde'));
    it(`trim to [abcde]`, () => expect(Trim('([abcde])', '()')).toBe('[abcde]'));
    it(`trim to ([abcde])`, () => expect(Trim('([abcde])', '[]')).toBe('([abcde])'));
    it(`trim to abcde`, () => expect(Trim('([abcde])', '[]()')).toBe('abcde'));
    it(`trim to abcde`, () => expect(Trim('[ ( abcde ) ]', '[]() ')).toBe('abcde'));

});




