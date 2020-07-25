import Numeric from "./numeric";
import NumericString from "../validatable/string/numeric";

export default function NumericStandard() : Numeric<string> {

    return new Numeric(NumericString);
}
