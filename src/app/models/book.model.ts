export class Book{
    constructor(
        public id: number,
        public title: string,
        public url: string,
        public author: string,
        public price: number,
        public isbn: string,
        public publisher: string,
        public rating: number
    ){}
}