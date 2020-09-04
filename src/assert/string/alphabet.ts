import Match from "../../value/match";
import SentencesIs from "../../message/sentences-is";

export default function Alphabet(
    valid : boolean,
    value : string,
    subject : string = 'string'
) : string {

    let sentence = SentencesIs(valid);
    sentence.object.push('alphabet');
    sentence.subject.push(subject);

    if(!valid) {

       let match = new Match(value, /[^a-zA-Z]{1,5}/);

       if(match.valid) {

           sentence.subject.push(`..${match.match[0]}..`)
       }
    }

    return sentence.message;
}
