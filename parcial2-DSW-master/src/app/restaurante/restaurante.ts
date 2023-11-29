export class Restaurante {
  id : number;
  name : string;
  country : string;
  opening_year: number;
  cuisine: string;
  rating: number;
  description: string;
  image: string;


  constructor(
    id : number,
  name : string,
  country : string,
  opening_year: number,
  cuisine: string,
  rating: number,
  description: string,
  image: string
  ){
    this.id = id;
    this.name = name;
    this.country = country;
    this.opening_year = opening_year;
    this.cuisine = cuisine;
    this.rating = rating;
    this.description = description;
    this.image = image;

  }
}

