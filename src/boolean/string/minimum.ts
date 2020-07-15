export default function Minimum(
    valid : boolean,
    string : string,
    minimum : number,
    inclusive : boolean,
) : string {

    let parts : string[] = [];
    parts.push(`string length`);

    if(valid) {

        parts.push(`is greater`);

    } else {

        parts.push(`must greater`);
    }

    if(inclusive) {

        parts.push('or equal');
    }

    parts.push(`than "${minimum}"`);

    return parts.join(' ');
}
