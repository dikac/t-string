export default interface MessageFactory {

    typeValid(subject : string, data : string) : string;
    typeInvalid(subject : string, data : any) : string;
}