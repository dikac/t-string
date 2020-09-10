import Sentence from "../../message/sentence";
import Truncate from "../../truncate";

export default function NotEmpty(
    valid : boolean,
    value : string,
    subject : string = 'string',
) : string {

    let sentence = new Sentence(valid);
    sentence.reject = 'must not';
    sentence.accept = 'is not';
    // sentence.predicate = {
    //     invalid : 'is not',
    //     valid : 'is'
    // };
    sentence.subject = subject;
    sentence.expect = 'empty string';
    //
    // if(!valid) {
    //
    //     sentence.subject = [subject, Truncate(value, 5)].join(' ');
    // }

    return sentence.message;
}
