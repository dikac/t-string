import Match from "../../value/match";
import SentencesMust from "../../message/sentences-must";

export default function Numeric(
    valid : boolean,
    value : string,
    subject : string = 'string'
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('numeric');
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid) {

        let match = new Match(value, /[^0-9]{1,5}/);

        if(match.valid) {

            sentence.actual.push('contain', `"${match.match[0]}"`)
        }
    }

    return sentence.message;
}
