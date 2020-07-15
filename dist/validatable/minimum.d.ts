import MinimumNumber from "@dikac/t-number/minimum/minimum";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-validatable/message/readonly-merge";
import Inclusive from "@dikac/t-number/inclusive/inclusive";
export default class Minimum<Msg> extends MergeWrapper<Value<string>, Message<Msg>, Validatable> implements Readonly<Inclusive>, Readonly<MinimumNumber> {
    readonly minimum: number;
    readonly inclusive: boolean;
    constructor(number: string, minimum: number, inclusive: boolean, message: Function<[Readonly<Value<string> & Inclusive & MinimumNumber & Validatable>], Msg>, converter?: Function<[string], number>);
}
