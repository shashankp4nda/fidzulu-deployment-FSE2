export class Dvd{
    constructor(
        public id: number,
        public title: string,
        public image: string,
        public mpaa_rating: string,
        public studio: string,
        public time: number,
        public price: number,
        public rating: number
    ){}
}