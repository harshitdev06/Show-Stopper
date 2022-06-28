export type Cast = {
  id: number;
  url: string;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  };
  birthday: Date;
  gender: string;
  image: {
    medium: string;
    original: string;
  };
};
