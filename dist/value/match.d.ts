import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import ValueOf from "@dikac/t-value/value-of/value-of";
export default class Match<ValueT extends string> implements Readonly<Value<ValueT>>, Readonly<Validatable>, Readonly<ValueOf<string>> {
    readonly value: ValueT;
    readonly pattern: RegExp;
    readonly valid: boolean;
    readonly match: string[];
    constructor(value: ValueT, pattern: RegExp);
    toString(): string;
    valueOf(): string;
}
