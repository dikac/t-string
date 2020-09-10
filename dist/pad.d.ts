import PaddingOption from "./padding/padding";
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
export default function Pad(string: string, padding: string, length: number, mode: PaddingOption): string;
