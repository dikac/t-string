import PaddingOption from "./affix/affix";
import PadPrefix from "./pad-prefix";
import PadSuffix from "./pad-suffix";
import PadCircumfix from "./pad-circumfix";
/**
 * pad string depend on {@param mode}
 * {@see PadPrefix}
 * {@see PadSuffix}
 * {@see PadCircumfix}
 *
 * @param string
 * @param padding
 * @param length
 * @param mode
 */
export default function Pad(string, padding, length, mode) {
    switch (mode) {
        case PaddingOption.PREFIX:
            return PadPrefix(string, length, padding);
        case PaddingOption.SUFFIX:
            return PadSuffix(string, length, padding);
        case PaddingOption.CIRCUMFIX:
            return PadCircumfix(string, length, padding);
    }
}
//# sourceMappingURL=pad.js.map