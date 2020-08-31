import Truncate from "../../truncate";
import SentencesIs from "../../message/sentences-is";

export default function Empty(
    valid : boolean,
    value : string,
    subject : string = 'string',
) : string {

    let sentence = new SentencesIs(valid);
    sentence.type.push('empty');
    sentence.value.push(subject);

    if(!valid) {

        sentence.value.push(Truncate(value, 8));

    }

    return sentence.message;
}
