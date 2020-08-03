import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function-single";
import Return from "@dikac/t-validator/return/return";
import Instance from "@dikac/t-validator/parameter/instance/instance";
export default function String<MessageT, Argument>(value: Argument, message: Function<Readonly<Value<Argument> & Validatable>, MessageT>): Return<unknown, Argument, string, Readonly<Instance<unknown, MessageT>>>;
