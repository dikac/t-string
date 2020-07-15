export default function String(value : unknown) : value is string {

    return typeof value === "string";
}
