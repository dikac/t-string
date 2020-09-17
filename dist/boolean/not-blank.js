/**
 * check if {@param string} contain non white space (\s) and not empty string {@see NotEmpty}
 *
 * @param string
 */
import Trim from "../trim";
import NotEmpty from "./not-empty";
export default function NotBlank(string) {
    return NotEmpty(Trim(string));
}
//# sourceMappingURL=not-blank.js.map