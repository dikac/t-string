import Validatable from "@dikac/t-validatable/validatable";
import ToString from "../to-string";
export default class Match implements Validatable, ToString {
    private captured;
    private _valid;
    constructor(source: string, pattern: RegExp);
    get valid(): boolean;
    toString(): string;
}
