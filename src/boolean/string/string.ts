export default function String(valid : boolean, value : unknown) : string {

    let string = (<any>value).toString();

    if(valid) {

        return `value "${string}" is string`;

    } else {

        return `value "${string}" is not string`;
    }
}
