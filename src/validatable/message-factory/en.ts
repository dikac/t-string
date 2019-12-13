import MessageFactory from "./message-factory";

export default class En implements MessageFactory {

    typeValid(subject : string, data : string) : string{

        return `${subject} type expect string, ${data} given`;
    }

    typeInvalid(subject : string, data : any) : string{

        return `${subject} type is string`;
    }
}