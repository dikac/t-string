export default function Segment(segment : string, delimiter : string) : string[] {

    let list = segment.split(delimiter);
    let length = list.length;

    let adds : string[] = [];

    for (let i = 1; i <= length; i++) {

        adds.push(list.slice(0, i).join(delimiter));
    }

    return adds;
}
