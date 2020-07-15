import MaximumNumber from "@dikac/t-number/maximum/maximum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-validatable/message/readonly-merge";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default class Maximum<Msg> extends MergeWrapper<Value<string>, Message<Msg>, Validatable> implements Readonly<Inclusive>, Readonly<MaximumNumber> {
    readonly maximum: number;
    readonly inclusive: boolean;
    constructor(number: string, maximum: number, inclusive: boolean, message: Function<[Readonly<Value<string> & Inclusive & MaximumNumber & Validatable>], Msg>, converter?: Function<[string], number>);
}
