import { SafeHtml } from "@angular/platform-browser";

export class Question {
    key: string;
    title : string;
    answer : Array<string>;
    content? :  Array<any>;
    type: string = 'multiple-choise' || 'only-answer' || 'complete';
}