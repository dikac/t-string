export default function Match(source : string, pattern : RegExp) : boolean {

    let match = source.match(pattern);

    if(match !== null) {

        this.captured = match[0];
        return true;
    }

    return false;
}
