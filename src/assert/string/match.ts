import Sentence from "../../message/sentence";
import Truncate from "../../truncate";

export default function Match(
    valid : boolean,
    value : string,
    pattern : RegExp,
    subject : string = 'string',
) : string {

    let sentence = new Sentence(valid);
    sentence.predicate.invalid = 'does not match against';
    sentence.predicate.valid = 'match against';

    sentence.object = pattern.source;

    sentence.subject = [subject, Truncate(value, 8)].join(' ');

    return sentence.message;
}
