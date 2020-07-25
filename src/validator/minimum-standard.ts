import Minimum from "./minimum";
import MinimumString from "../validatable/string/minimum";

export default function MinimumStandard(minimum : number, inclusive : boolean) : Minimum<string> {

    return new Minimum(minimum, inclusive, MinimumString);
}
