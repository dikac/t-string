import Padding from "../dist/pad";
import Affix from "../dist/affix/affix";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

it("left", function() {

    expect(Padding('12345', '.|', 10, Affix.PREFIX)).toBe('.|.|.12345');

});

it("right", function() {

    expect(Padding('12345', '.|', 10, Affix.SUFFIX)).toBe('12345.|.|.');

});

it("both", function() {

    expect(Padding('12345', '.|', 10, Affix.CIRCUMFIX)).toBe('.|12345.|.');

});
