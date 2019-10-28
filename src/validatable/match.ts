import Validatable from "t-validatable/validatable";
import ToString from "../to-string";

export default class Match implements Validatable, ToString {

    private captured : string = '';
    private _valid : boolean = false;

    constructor(source : string, pattern : RegExp) {

        let match = source.match(pattern);

        if(match !== null) {

            this.captured = match[0];
            this._valid = true;
        }
    }

    get valid(): boolean {

        return this._valid;
    }

    toString(): string {

        return this.captured;
    }
}


