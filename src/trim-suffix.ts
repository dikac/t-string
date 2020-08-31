import * as Escape from "escape-string-regexp";
import {capitalize, trimRight} from "voca";

const TrimSuffix : (string : string, characters ?: string) => string = trimRight;
export default TrimSuffix;

