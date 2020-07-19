export default function Empty(
    valid : boolean,
    empty : boolean,
    value : string,
) : string {

    if(empty) {

        if(valid) {

            return `string is empty`;

        } else {

            return `string must empty`;
        }

    } else {

        if(valid) {

            return `string is not empty`;

        } else {

            return `string must not empty`;
        }
    }
}
