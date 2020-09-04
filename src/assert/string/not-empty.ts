import Sentence from "../../message/sentence";
import Truncate from "../../truncate";

export default function NotEmpty(
    valid : boolean,
    value : string,
    subject : string = 'string',
) : string {

    let sentence = new Sentence(valid);
    sentence.predicate = {
        invalid : 'is not',
        valid : 'is'
    };
    sentence.subject = subject;
    sentence.object = 'empty';

    if(!valid) {

        sentence.subject = [subject, Truncate(value, 5)].join(' ');
    }

    return sentence.message;
}
