import UpperFirst from './upper-first';

export default function UpperWords (
    string : string,
    splitters : string[]
) : string {

    if(splitters.length === 0) {

        return string;
    }

    const splitter = splitters[0];

    let temp : string[] = [];

    for(let str of string.split(splitter)) {

        temp.push(UpperFirst(str));
    }

    string = temp.join(splitter);


    return UpperWords(string, splitters.slice(1));

}
