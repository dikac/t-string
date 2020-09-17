import GreaterParameter from "@dikac/t-number/boolean/greater";
export default function Minimum(object) {
    return GreaterParameter(object.converter(object.value), object.minimum, object.inclusive);
}
//# sourceMappingURL=minimum.js.map