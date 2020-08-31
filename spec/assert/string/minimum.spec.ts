import Minimum from "../../../dist/assert/string/minimum";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('true valid', ()=>{

    it('inclusive', ()=>{

        expect(Minimum(true, 'abcde', 5, true,'value')).toBe(
            'value length is greater or equal than 5'
        );

    });

    it('exclusive', ()=>{

        expect(Minimum(true, 'abcdde', 5, false,'value')).toBe(
            'value length is greater than 5'
        );

    });
});



describe('true invalid', ()=>{

    it('inclusive', ()=>{

        expect(Minimum(true, 'abc', 5, true,'value')).toBe(
            'value length is greater or equal than 5'
        );

    });

    it('exlusive', ()=>{

        expect(Minimum(true, 'abc', 5, false,'value')).toBe(
            'value length is greater than 5'
        );

    });
});



describe('false valid', ()=>{

    it('inclusive', ()=>{

        expect(Minimum(false, 'abcdef', 5, true,'value')).toBe(
            'value length must greater or equal than 5'
        );

    });

    it('exclusive', ()=>{

        expect(Minimum(false, 'abcde', 5, false,'value')).toBe(
            'value length must greater than 5'
        );

    });
});


describe('false invalid', ()=>{

    it('inclusive', ()=>{

        expect(Minimum(false, '123456789', 5, true,'value')).toBe(
            'value length must greater or equal than 5'
        );

    });

    it('exclusive', ()=>{

        expect(Minimum(false, '123456789', 5, false,'value')).toBe(
            'value length must greater than 5'
        );

    });
});
