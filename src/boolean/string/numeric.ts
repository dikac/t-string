export default function Numeric(
    valid : boolean,
    value : string
) : string {

    if(valid) {

        return `string is numeric`;

    } else {

        return `string is not numeric`;
    }
}
