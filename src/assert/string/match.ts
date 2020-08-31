import Sentence from "../../message/sentence";
import Truncate from "../../truncate";

export default function Match(
    valid : boolean,
    value : string,
    pattern : RegExp,
    subject : string = 'string',
) : string {

    let sentence = new Sentence(valid);
    sentence.expectation.invalid = 'does not match against';
    sentence.expectation.valid = 'match against';

    sentence.type = pattern.source;

    sentence.value = [subject, Truncate(value, 8)].join(' ');

    return sentence.message;
}
