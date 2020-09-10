import SentencesMust from "../../message/sentences-must";

export default function String(
    valid : boolean,
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('string');
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid) {

        sentence.actual.push('actual', conversion(value));
    }

    return sentence.message;
}
