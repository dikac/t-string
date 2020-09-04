import Truncate from "../../truncate";
import SentencesIs from "../../message/sentences-is";

export default function Empty(
    valid : boolean,
    value : string,
    subject : string = 'string',
) : string {

    let sentence = SentencesIs(valid);
    sentence.object.push('empty');
    sentence.subject.push(subject);

    if(!valid) {

        sentence.subject.push(Truncate(value, 8));

    }

    return sentence.message;
}
