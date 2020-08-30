import AffixCharacter from "../dist/affix-character";
import Padding from "../dist/padding/padding";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("suffix", function() {

    expect(AffixCharacter('12345', 'ab', Padding.SUFFIX)).toBe('12345a');
    expect(AffixCharacter('12345a', 'ab', Padding.SUFFIX)).toBe('12345a');

});


it("basic", function() {

    expect(AffixCharacter('12345', 'ab', Padding.PREFIX)).toBe('a12345');
    expect(AffixCharacter('a12345', 'ab', Padding.PREFIX)).toBe('a12345');

});

it("circumfix", function() {

    expect(AffixCharacter('12345', 'ab', Padding.CIRCUMFIX)).toBe('a12345a');
    expect(AffixCharacter('a12345', 'ab', Padding.CIRCUMFIX)).toBe('a12345a');

});

