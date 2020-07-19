import EmptyType from "../../boolean/string/empty";

export default function Empty(empty : boolean, string : string) : Error {

    return new Error(EmptyType(false, empty, string))
}
