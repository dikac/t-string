export default function Match(
    valid : boolean,
    value : string,
    pattern : RegExp
) : string {

    if(valid) {

        return `string is match with ${pattern}`;

    } else {

        return `string is not match with ${pattern}`;
    }
}
