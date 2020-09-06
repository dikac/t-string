
export default function RemovePrefixCharacter(string : string, character : string) : string {

    if(string.length !== 0) {

        character = character[0];

        if(string[0] === character) {

            return string.slice(1);
        }
    }

    return string;

}
