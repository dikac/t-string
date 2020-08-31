import Sentence from "../../message/sentence";
import Truncate from "../../truncate";

export default function NotEmpty(
    valid : boolean,
    value : string,
    subject : string = 'string',
) : string {

    let sentence = new Sentence(valid);
    sentence.expectation = {
        invalid : 'is not',
        valid : 'is'
    };
    sentence.value = subject;
    sentence.type = 'empty';

    if(!valid) {

        sentence.value = [subject, Truncate(value, 5)].join(' ');
    }

    return sentence.message;
}
