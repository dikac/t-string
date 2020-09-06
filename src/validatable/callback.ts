import ValidatableCallbacks from "@dikac/t-validator/validatable/callback";
import ValueOf from "@dikac/t-value/value-of/value-of";
import ToString from "../to-string";

export default class Callback<Type extends string, MessageType = unknown> extends ValidatableCallbacks<string, Type, MessageType> implements ValueOf<string>, ToString {

    valueOf() : string {

        return this.value;
    }

    toString() : string {

        return this.value;
    }
}
