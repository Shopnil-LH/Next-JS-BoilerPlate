interface ICountry {
  code: string;
  name: string;
}

interface ICard {
  link?: string | undefined;
  header: string;
  paragraph: string;
}

export type { ICountry, ICard };
