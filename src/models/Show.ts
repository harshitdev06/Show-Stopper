export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: Date;
  ended: Date;
  officialSite: string;
  rating: Rating;
  image: Image;
  summary: string;
  updated: number;
};

interface Image {
  medium: string;
  original: string;
}
interface Rating {
  average: number;
}
