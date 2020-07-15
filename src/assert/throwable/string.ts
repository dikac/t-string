import StringType from "../../boolean/string/string";

export default function String(string : unknown) : Error {

    return new Error(StringType(false, string))
}
