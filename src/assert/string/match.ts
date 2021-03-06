import Truncate from "../../truncate";
import Sentences from "../../message/sentences";

export default function Match(
    valid : boolean,
    value : string,
    pattern : RegExp,
    subject : string = 'string',
) : string {

    let sentence = new Sentences(valid);

    sentence.reject.push('does not match against');
    sentence.accept.push('match against');

    sentence.expect.push(pattern.source);

    sentence.subject.push(subject, `"${Truncate(value, 8)}"`);

    return sentence.message;
}
