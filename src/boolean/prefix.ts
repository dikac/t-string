export default function Prefix(string : string, prefix : string) : boolean {

    string = string.slice(0, prefix.length);

    return string === prefix;

}
