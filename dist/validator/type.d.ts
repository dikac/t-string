import MessageFactory from "../validatable/message-factory/message-factory";
import Message from "t-validator/type";
export default class Type extends Message<string> {
    private subject;
    private factory;
    constructor(subject: string, factory?: MessageFactory);
}
