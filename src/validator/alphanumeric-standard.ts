import Alphanumeric from "./alphanumeric";
import AlphanumericString from "../validatable/string/alphanumeric";

export default function AlphanumericStandard() : Alphanumeric<string> {

    return new Alphanumeric(AlphanumericString);
}
