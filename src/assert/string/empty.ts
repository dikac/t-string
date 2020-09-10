import Truncate from "../../truncate";
import SentencesMust from "../../message/sentences-must";

export default function Empty(
    valid : boolean,
    value : string,
    subject : string = 'string',
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('empty', 'string');
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid && value.length) {

        sentence.actual.push('actual', `"${Truncate(value, 8)}"`);

    }

    return sentence.message;
}
