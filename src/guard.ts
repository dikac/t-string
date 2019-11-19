import Type from "./boolean/type";

export default function Guard(value : any) : string {

    if(Type(value)) {

        return value;
    }

    throw new Error('type expect string, given ' + value);
}