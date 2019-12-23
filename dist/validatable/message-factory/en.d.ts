import MessageFactory from "./message-factory";
export default class En implements MessageFactory {
    typeValid(subject: string, data: string): string;
    typeInvalid(subject: string, data: any): string;
}
