import Maximum from "./maximum";
import MaximumString from "../validatable/string/maximum";

export default function MaximumStandard(
    maximum : number,
    inclusive : boolean
) : Maximum<string> {

    return new Maximum(maximum, inclusive, MaximumString);
}
