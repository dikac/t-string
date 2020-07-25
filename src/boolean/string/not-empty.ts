export default function NotEmpty(
    valid : boolean,
    value : string,
) : string {

    if(valid) {

        return `string is not empty`;

    } else {

        return `string must not empty`;
    }
}
