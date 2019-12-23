import MessageFactory from "./message-factory/message-factory";
import ResultType from "t-validator/validatable/type";
export default class Type extends ResultType<string> {
    private subject;
    private factory;
    constructor(data: any, subject: string, factory?: MessageFactory);
    protected getMessage(data: any, valid: boolean): string;
}
