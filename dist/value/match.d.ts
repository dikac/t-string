import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import ValueOf from "@dikac/t-value/value-of/value-of";
export default class Match<ValueType extends string> implements Readonly<Value<ValueType>>, Readonly<Validatable>, Readonly<ValueOf<string>> {
    readonly value: ValueType;
    readonly pattern: RegExp;
    readonly valid: boolean;
    readonly match: string[];
    constructor(value: ValueType, pattern: RegExp);
    toString(): string;
    valueOf(): string;
}
