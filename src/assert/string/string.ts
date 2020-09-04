import SentencesIs from "../../message/sentences-is";

export default function String(
    valid : boolean,
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    let sentence = SentencesIs(valid);
    sentence.object.push('string');
    sentence.subject.push(subject);

    if(!valid) {

        sentence.subject.push(conversion(value));
    }

    return sentence.message;
}
