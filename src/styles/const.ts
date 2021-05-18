import { rem } from "polished";

export const colors = {
  primary: {
    darker: "#322B01",
    dark: "#968004",
    base: "#FAD506",
    light: "#FCE66A",
    lighter: "#FEF7CD",
  },
  secondary: {
    darker: "#010932",
    dark: "#041A96",
    base: "#062BFA",
    light: "#6A80FC",
    lighter: "#CDD5FE",
  },
  tertiary: {
    darker: "#2D0520",
    dark: "#891E61",
    base: "#FA06A5",
    light: "#EA75C5",
    lighter: "#F6CFEB",
  },
  error: {
    darker: "#2D070A",
    dark: "#8A1F21",
    base: "#FC142C",
    light: "#EC7A82",
    lighter: "#F7D2D5",
  },
  success: {
    darker: "#013212",
    dark: "#049637",
    base: "#06FA5B",
    light: "#6AFC9D",
    lighter: "#CDFEDE",
  },
  neutral: {
    darker: "#272724",
    dark: "#3C3B38",
    base: "#777773",
    light: "#D5D5D2",
    lighter: "#EFEEEA",
  },
  background: {
    white: "#FBFBFE",
    whiter: "#FFFFFF",
  },
  font: {
    dark: "#191501",
    grey: "#707072",
  },
};

export const space = {
  base: rem(16),
  xxs: rem(4),
  xs: rem(8),
  sm: rem(12),
  md: rem(24),
  lg: rem(32),
  xl: rem(40),
  xxl: rem(64),
};

export const radius = {
  base: "2px",
  lg: "4px",
};

export type FontWeight = 300 | 400 | 600 | 700;
export const font: {
  weight: Record<"light" | "normal" | "semiBold" | "bold", FontWeight>;
} = {
  weight: {
    light: 300,
    normal: 400,
    semiBold: 600,
    bold: 700,
  },
};
