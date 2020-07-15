import Validatable from "@dikac/t-validatable/validatable";
import ToString from "../to-string";
import Value from "@dikac/t-value/value";
export default class Match implements Validatable, ToString, Value<string> {
    private source;
    readonly pattern: RegExp;
    readonly result: RegExpMatchArray | undefined;
    private _valid;
    constructor(source: string, pattern: RegExp);
    get value(): string;
    get valid(): boolean;
    toString(): string;
}
