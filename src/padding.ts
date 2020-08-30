import PaddingOption from "./padding/padding";

export default function Padding(
    string : string,
    padding : string,
    length : number,
    mode : PaddingOption
) : string {

    switch (mode) {
        case PaddingOption.PREFIX :
            return string.padStart(length, padding);

        case PaddingOption.SUFFIX :
            return string.padEnd(length, padding);

        case PaddingOption.CIRCUMFIX :

            const offset = (length - string.length) / 2;

            const prefix = ''.padStart(Math.ceil(offset), padding);
            const suffix = ''.padEnd(Math.floor(offset), padding);

            return prefix + string + suffix;

    }

}
