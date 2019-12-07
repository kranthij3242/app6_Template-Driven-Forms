import { stringify } from 'querystring'

export class Hero {
    constructor(
        public id:Number,
        public name:string,
        public power:string,
        public alterego?:string

    ){
        
    }
}
