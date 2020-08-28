import SafeCast from "../../safe-cast";

export default function String(
    valid : boolean,
    value : unknown,
    conversion : (value:unknown)=>string = SafeCast
) : string {

    let string = conversion(value);

    if(valid) {

        return `value "${string}" is string`;

    } else {

        return `value "${string}" is not string`;
    }
}
