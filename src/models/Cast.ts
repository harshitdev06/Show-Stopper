export type Cast = CastObj[]
export type CastObj= {
  person: Person;
  character: Character;
}

export interface Character {
  id: number;
  url: string;
  name: string;
  image: {
    medium: string;
    original: string;
  };
}


export type Person = {
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
