export default function Suffix(string : string, suffix : string) : boolean {

    string = string.slice(-suffix.length);

    return string === suffix;

}
