import PaddingOption from "./padding/padding";
import PadPrefix from "./pad-prefix";
import PadSuffix from "./pad-suffix";
import PadCircumfix from "./pad-circumfix";

export default function Pad(
    string : string,
    padding : string,
    length : number,
    mode : PaddingOption
) : string {

    switch (mode) {
        case PaddingOption.PREFIX :
            return PadPrefix(string, length, padding);

        case PaddingOption.SUFFIX :
            return PadSuffix(string, length, padding);

        case PaddingOption.CIRCUMFIX :
            return PadCircumfix(string, length, padding);

    }

}
