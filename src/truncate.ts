import {truncate} from "lodash";

/**
 * wrapper for {@see truncate}
 *
 * @param string
 * @param length
 * @param omission
 * @default "..."
 *
 * @param separator
 */
export default function Truncate (string : string, length : number, omission : string = '...', separator ?: RegExp|string)  : string {

    return truncate(string, {
        length : length,
        omission : omission,
        separator : separator
    })
}


