import EmptyType from "../../boolean/string/empty";

export default function Empty(string : string) : Error {

    return new Error(EmptyType(false, string))
}
