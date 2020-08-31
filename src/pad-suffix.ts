import * as Escape from "escape-string-regexp";
import {capitalize, padRight} from "voca";

const PadSuffix : (string : string, length : number, characters : string) => string = padRight;
export default PadSuffix;

