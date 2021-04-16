export class Question {
    key: string;
    title? : string;
    name? : string;
    answer : Array<string>;
    content? :  Array<any>;
    type?: string = 'multiple-choise' || 'only-answer' || 'complete';
}