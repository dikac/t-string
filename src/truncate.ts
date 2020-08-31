import {truncate} from "voca";

/**
 * @param string
 * @param length
 * @param end
 * default "..."
 */
const Truncate : (string : string, length : number, end?: string) => string = truncate;

export default Truncate;

