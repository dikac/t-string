import * as Escape from "escape-string-regexp";
import {capitalize, padLeft} from "voca";

const PadPrefix : (string : string, length : number, characters : string) => string = padLeft;
export default PadPrefix;

