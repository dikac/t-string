export default function Match(source : string, pattern : RegExp) : boolean {

    let match = source.match(pattern);

    if(match !== null) {

        return true;
    }

    return false;
}
