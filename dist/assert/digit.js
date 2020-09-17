import Guard from "../boolean/digit";
import Callback from "@dikac/t-function/assert/callback";
import DigitError from "./throwable/digit";
export default function Digit(value, error = DigitError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=digit.js.map