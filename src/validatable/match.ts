import Validatable from "@dikac/t-validatable/validatable";
import ToString from "../to-string";
import Value from "@dikac/t-value/value";

export default class Match implements Validatable, ToString, Value<string> {

    readonly result : RegExpMatchArray|undefined;
    private _valid : boolean = false;

    constructor(
        private source : string,
        readonly pattern : RegExp
    ) {

        let match = source.match(pattern);

        if(match !== null) {

            this.result = match;
            this._valid = true;
        }
    }

    get value() : string {

        return this.source;
    }

    get valid(): boolean {

        return this._valid;
    }

    toString(): string {

        return this.source;
    }
}


