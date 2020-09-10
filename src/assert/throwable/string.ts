import StringType from "../string/string";

export default function String(
    string : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : Error {

    return new TypeError(StringType(false, string, subject, conversion))
}
