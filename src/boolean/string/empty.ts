export default function Empty(
    valid : boolean,
    value : string,
) : string {

    if(valid) {

        return `string is empty`;

    } else {

        return `string must empty`;
    }
}
