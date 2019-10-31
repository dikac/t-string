export default function Type(value : any) : value is string {

    return typeof value === "string";
}