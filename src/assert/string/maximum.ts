import Sentences from "../../message/sentences";

export default function Maximum(
    valid : boolean,
    string : string,
    maximum : number,
    inclusive : boolean,
    subject : string = 'string',
) : string {

    let sentence = new Sentences(valid);

    sentence.subject.push(subject);
    sentence.subject.push('length');

    if(valid) {

        sentence.predicate.valid.push(`is lower`);

    } else {

        sentence.predicate.invalid.push(`must lower`);
    }

    if(inclusive) {

        sentence.predicate.valid.push(`or equal`);
        sentence.predicate.invalid.push(`or equal`);
    }

    sentence.object.push('than', maximum.toString());

    return sentence.message;
}
