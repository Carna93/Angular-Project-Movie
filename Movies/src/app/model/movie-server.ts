import { Movies } from './movies';
export class MoviesList{
    count: number;
    results:Movies[];
    constructor(obj?:any){
        this.count = obj && obj.count || null;
        this.results = obj && obj.results.map(data=>{
            return new Movies(data);
        }) || [];
    }
}