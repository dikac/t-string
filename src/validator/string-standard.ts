import String from "./string";
import StringString from "../validatable/string/string";

export default function StringStandard() : String<string> {

    return new String(StringString);
}
