import Sentences from "./sentences";
/**
 * create {@see Sentences} with default predicate {invalid : ['is not'], valid : ['is']}
 * @param valid
 * @param subject
 * @param predicate
 * @param value
 */
export default function SentencesIs(valid: boolean, subject?: string[], predicate?: {
    invalid: string[];
    valid: string[];
}, value?: string[]): Sentences;
