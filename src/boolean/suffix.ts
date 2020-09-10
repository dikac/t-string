import {startsWith} from "lodash";

/**
 * @see startsWith
 * @param string
 * @param suffix
 */
export default function Suffix(string : string, suffix : string) : boolean {

    return startsWith(suffix, string);

}
