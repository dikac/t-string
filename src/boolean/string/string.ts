import SafeCast from "../../safe-cast";
import FunctionSingle from "@dikac/t-function/function-single";

export default function String(
    valid : boolean,
    value : unknown,
    conversion : FunctionSingle<unknown, string> = SafeCast
) : string {

    let string = conversion(value);

    if(valid) {

        return `value "${string}" is string`;

    } else {

        return `value "${string}" is not string`;
    }
}
