import MessageFactory from "./message-factory/message-factory";
import ResultType from "t-validator/validatable/type";
import TypeCheck from "../boolean/type";
import En from "./message-factory/en";

export default class Type extends ResultType<string> {

    constructor(
        data : any,
        private subject : string,
        private factory : MessageFactory = new En()
    ) {

        super(data, TypeCheck)
    }

    protected getMessage(data: any, valid: boolean) : string {

        return this.valid ? this.factory.typeValid(this.subject, data) : this.factory.typeInvalid(this.subject, data);
    }

}