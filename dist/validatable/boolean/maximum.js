import LowerParameter from "@dikac/t-number/boolean/lower";
export default function Maximum(object) {
    return LowerParameter(object.converter(object.value), object.maximum, object.inclusive);
}
//# sourceMappingURL=maximum.js.map