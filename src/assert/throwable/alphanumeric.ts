import AlphanumericType from "../../boolean/string/alphanumeric";

export default function Alphanumeric(string : string) : Error {

    return new Error(AlphanumericType(false, string))
}
