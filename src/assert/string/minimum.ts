import Sentences from "../../message/sentences";

export default function Minimum(
    valid : boolean,
    string : string,
    minimum : number,
    inclusive : boolean,
    subject : string = 'string',
) : string {

    let sentence = new Sentences(valid);

    sentence.subject.push(subject);
    sentence.subject.push('length');

    if(valid) {

        sentence.predicate.valid.push(`is greater`);

    } else {

        sentence.predicate.invalid.push(`must greater`);
    }

    if(inclusive) {

        sentence.predicate.valid.push(`or equal`);
        sentence.predicate.invalid.push(`or equal`);
    }

    sentence.object.push('than', minimum.toString());

    return sentence.message;
}
