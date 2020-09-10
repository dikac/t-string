/**
 * check if {@param string} contain non white space (\s) and not empty string {@see NotEmpty}
 *
 * @param string
 */
import Trim from "../trim";
import NotEmpty from "./not-empty";

export default function NotBlank(
    string : string,
) : boolean {

    return NotEmpty(Trim(string));
}
