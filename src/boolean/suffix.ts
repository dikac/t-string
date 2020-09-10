import {endsWith} from "lodash";

/**
 * @see startsWith
 * @param string
 * @param suffix
 */
export default function Suffix(string : string, suffix : string) : boolean {

    return endsWith(string, suffix);

}
