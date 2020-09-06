export default function RemoveSuffixCharacter(string : string, character : string) : string {

    if(string.length !== 0) {

        character = character[0];

        if(string[string.length - 1] === character) {

            return string.slice(0, string.length - 1);
        }
    }

    return string;

}
