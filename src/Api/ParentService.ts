export abstract class ParentService {
  url =
    "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";
  abstract getYards(_: any, thunkApi: any): void;
}
