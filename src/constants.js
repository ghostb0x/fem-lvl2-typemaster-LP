export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  offblack: 'hsl(220deg 50% 17%)',
  darkGray: 'hsl(221deg 23% 58%)',
  lightGray: 'hsl(198deg 28% 93%)',
  darkOrange: 'hsl(22deg 89% 52%)',
  lightOrange: 'hsl(22deg 100% 69%)',
};

export const WEIGHTS = {
  medium: 500,
  bold: 700,
  black: 900,
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1200,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
      (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
      (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

