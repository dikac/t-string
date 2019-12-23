import MessageFactory from "./message-factory";

export default class En implements MessageFactory {

    typeValid(subject : string, data : string) : string{

        return `"${subject}" type is string`;
    }

    typeInvalid(subject : string, data : any) : string{
        let type = typeof data;
        return `"${subject}" type expect string, "${type}" given`;

    }
}