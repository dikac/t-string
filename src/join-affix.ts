import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import Delimiter from "./delimiter/delimiter";
import {Object} from "ts-toolbelt";
import SafeCast from "./safe-cast";

export default function JoinAffix(
    strings : string[],
    option : Object.Optional<Prefix & Suffix> & Delimiter
) : string {

    return SafeCast(option.prefix) + strings.join(option.delimiter) + SafeCast(option.suffix);
}
