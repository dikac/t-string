export default function Empty(
    string : string,
    empty : boolean = true
) : boolean {

    if(string === '') {

        return empty;

    } else {

        return !empty;
    }
}
