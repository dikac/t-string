import UpperFirst from './upper-first';

export default function UpperWords (
    string : string,
    split : string|RegExp
) : string {

    for (let separator of string.match(split) || []) {

        string = string.split(separator).map(UpperFirst).join(separator);
    }

    return UpperFirst(string);

}
