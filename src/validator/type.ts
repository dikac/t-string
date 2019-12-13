import TypeResult from "../validatable/type";
import TypeBoolean from "../boolean/type";
import MessageFactory from "../validatable/message-factory/message-factory";
import Message from "t-validator/type";
import TypeValidatable from "../validatable/type";
import En from "../validatable/message-factory/en";

export default class Type extends Message<string> {

    constructor(
        private subject : string,
        private factory : MessageFactory = new En(),
    ) {

        super((value : any) => new TypeValidatable(value, subject, factory))
    }

}
