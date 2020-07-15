export default function Empty(
    empty : boolean,
    value : string,
) : string {

    if(empty) {

        return `string is empty`;

    } else {

        return `string is not empty`;
    }
}
