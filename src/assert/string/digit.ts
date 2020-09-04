import Match from "../../value/match";
import SentencesIs from "../../message/sentences-is";

export default function Digit(
    valid : boolean,
    value : string,
    subject : string = 'string'
) : string {

    let sentence = SentencesIs(valid);
    sentence.object.push('digit');
    sentence.subject.push(subject);

    if(!valid) {

        let match = new Match(value, /[^0-9]{1,5}/);

        if(match.valid) {

            sentence.subject.push(`..${match.match[0]}..`)
        }
    }

    return sentence.message;
}
