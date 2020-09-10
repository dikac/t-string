/**
 * prepend {@param character} to {@param string} if not exist and {@param string} not empty
 *
 * @param string
 * @param character
 */
export default function PrefixCharacter(string : string, character : string) : string {

    if(string.length !== 0) {

        character = character[0];

        if(string[0] !== character) {

            return character + string;
        }
    }

    return string;

}
