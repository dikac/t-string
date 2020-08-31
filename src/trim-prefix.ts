import * as Escape from "escape-string-regexp";
import {capitalize, trimLeft} from "voca";

const TrimPrefix : (string : string, characters ?: string) => string = trimLeft;
export default TrimPrefix;

