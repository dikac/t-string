import Prefix from "./prefix/prefix";
import Suffix from "./suffix/suffix";
import Delimiter from "./delimiter/delimiter";
import { Object } from "ts-toolbelt";
export default function JoinAffix(strings: string[], option: Object.Optional<Prefix & Suffix> & Delimiter): string;
