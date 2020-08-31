import Sentences from "../../message/sentences";

export default function Maximum(
    valid : boolean,
    string : string,
    maximum : number,
    inclusive : boolean,
    subject : string = 'string',
) : string {

    let sentence = new Sentences(valid);

    sentence.value.push(subject);
    sentence.value.push('length');

    if(valid) {

        sentence.expectation.valid.push(`is lower`);

    } else {

        sentence.expectation.invalid.push(`must lower`);
    }

    if(inclusive) {

        sentence.expectation.valid.push(`or equal`);
        sentence.expectation.invalid.push(`or equal`);
    }

    sentence.type.push('than', maximum.toString());

    return sentence.message;
}
