import NotBlankBoolean from "../boolean/not-blank";
import Callback from "./callback";
export default class NotBlank extends Callback {
    constructor(value, message) {
        super(value, NotBlankBoolean, message);
    }
}
//# sourceMappingURL=not-blank.js.map