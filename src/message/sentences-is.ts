import Sentences from "./sentences";

export default function SentencesIs(
    valid : boolean,
    value : string[] = [],
    expectation : {invalid : string[], valid : string[]} = {invalid : ['is not'], valid : ['is']},
    type : string[] = []
) {
    return new Sentences(valid, value, expectation, type);
}
