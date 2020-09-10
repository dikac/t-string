import {endsWith} from "lodash";
/**
 * @see startsWith
 * @param string
 * @param prefix
 */
export default function Prefix(string : string, prefix : string) : boolean {

    return endsWith(string, prefix);

}
