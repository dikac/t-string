import Validatable from "@dikac/t-validatable/validatable";
import ToString from "../to-string";
export default class Validated<Wrapped extends ToString = ToString, Result extends Validatable = Validatable> implements Validatable {
    readonly string: Wrapped;
    readonly validatable: Result;
    constructor(string: Wrapped, validator: (vertex: Wrapped) => Result);
    toString(): string;
    get valid(): boolean;
}
