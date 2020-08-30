import Difference from "@dikac/t-array/difference";

export default function Segment(
    root : string,
    compare : string,
    delimiter : string
) : boolean {

    if(root === compare) {

        return true;
    }

    return Difference(
        root.split(delimiter),
        compare.split(delimiter),
    ).length === 0;
}
