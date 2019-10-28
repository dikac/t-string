import Validatable from "t-validatable/validatable";
import ToString from "../to-string";

export default
    class Validated <
        Wrapped extends ToString = ToString,
        Result extends Validatable = Validatable,
    >
    implements Validatable
{
    readonly validatable : Result;

    constructor(
        readonly string : Wrapped,
        validator : (vertex : Wrapped) => Result
    ) {
        this.validatable = validator(string);
    }

    toString() : string {

        return this.string.toString();
    }

    get valid() : boolean {

        return this.validatable.valid;
    }
}