import Guard from "../boolean/maximum";
import Callback from "@dikac/t-function/assert/callback";
import MaximumError from "./throwable/maximum";
import Count from "../number/count";

export default function Maximum(
    value : string,
    maximum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Count,
    error : (value:string, maximum:number, inclusive:boolean)=>Error = MaximumError
) : asserts value is string {

    let guard = (value : string, maximum : number, inclusive : boolean) => {
        return Guard(value, maximum, inclusive, converter);
    }

    Callback(value, guard, error, maximum, inclusive);
}
