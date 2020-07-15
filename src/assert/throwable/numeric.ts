import NumericType from "../../boolean/string/numeric";

export default function Numeric(string : string) : Error {

    return new Error(NumericType(false, string))
}
