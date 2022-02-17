export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    imageUrl: string;
    countries: number;
    languages: number;
    cities: number;
    citiesList: {
      city: string;
      country: string;
      imageUrl: string;
      conuntryFlag: string;
    }[]
  }
}