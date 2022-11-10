// colorSchemes
enum colorSchemes {
  blue = 'blue',
  skyblue = 'skyblue',
  white = 'white',
  black = 'black',
}

// sectionHeadingColorSchemeType
export type sectionHeadingColorSchemeType = `${colorSchemes}`;

// ISectionHeading
export interface ISectionHeading {
  subTitle?: string;
  title: string;
  description?: string;
  isCenter?: boolean;
  colorScheme?: sectionHeadingColorSchemeType;
  isBottomSpacing?: boolean;
}
