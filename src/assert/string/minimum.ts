import Sentences from "../../message/sentences";

export default function Minimum(
    valid : boolean,
    string : string,
    minimum : number,
    inclusive : boolean,
    subject : string = 'string',
) : string {

    let sentence = new Sentences(valid);

    sentence.value.push(subject);
    sentence.value.push('length');

    if(valid) {

        sentence.expectation.valid.push(`is greater`);

    } else {

        sentence.expectation.invalid.push(`must greater`);
    }

    if(inclusive) {

        sentence.expectation.valid.push(`or equal`);
        sentence.expectation.invalid.push(`or equal`);
    }

    sentence.type.push('than', minimum.toString());

    return sentence.message;
}
