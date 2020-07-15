export default function Maximum(
    valid : boolean,
    string : string,
    maximum : number,
    inclusive : boolean,
) : string {

    let parts : string[] = [];
    parts.push(`string length`);

    if(valid) {

        parts.push(`is lower`);

    } else {

        parts.push(`must lower`);
    }

    if(inclusive) {

        parts.push('or equal');
    }

    parts.push(`than "${maximum}"`);

    return parts.join(' ');
}
