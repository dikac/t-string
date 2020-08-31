import Maximum from "../../../dist/assert/string/maximum";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe('true valid', ()=>{

    it('inclusive', ()=>{

        expect(Maximum(true, 'abcde', 5, true,'value')).toBe(
            'value length is lower or equal than 5'
        );

    });

    it('exclusive', ()=>{

        expect(Maximum(true, 'abcd', 5, false,'value')).toBe(
            'value length is lower than 5'
        );

    });
});



describe('true invalid', ()=>{

    it('inclusive', ()=>{

        expect(Maximum(true, '123456789', 5, true,'value')).toBe(
            'value length is lower or equal than 5'
        );

    });

    it('exlusive', ()=>{

        expect(Maximum(true, '123456789', 5, false,'value')).toBe(
            'value length is lower than 5'
        );

    });
});



describe('false valid', ()=>{

    it('inclusive', ()=>{

        expect(Maximum(false, 'abcde', 5, true,'value')).toBe(
            'value length must lower or equal than 5'
        );

    });

    it('exclusive', ()=>{

        expect(Maximum(false, 'abcd', 5, false,'value')).toBe(
            'value length must lower than 5'
        );

    });
});


describe('false invalid', ()=>{

    it('inclusive', ()=>{

        expect(Maximum(false, '123456789', 5, true,'value')).toBe(
            'value length must lower or equal than 5'
        );

    });

    it('exclusive', ()=>{

        expect(Maximum(false, '123456789', 5, false,'value')).toBe(
            'value length must lower than 5'
        );

    });
});
