import { rem } from "polished";

export const colors = {
  primary: {
    dark: "#DAAD10",
    base: "#F5CC7C",
    light: "#FBEAAF",
    lighter: "#FCF6E0",
  },
  secondary: {
    dark: "#063773",
    base: "#3A84DC",
    light: "#83B8F9",
    lighter: "#D1E4FC",
  },
  tertiary: {
    dark: "#891E61",
    base: "#FA06A5",
    light: "#EA75C5",
    lighter: "#F6CFEB",
  },
  error: {
    dark: "#7E1B17",
    base: "#C54039",
    light: "#EE7E79",
    lighter: "#FBE8E8",
  },
  success: {
    dark: "#0B8257",
    base: "#52B596",
    light: "#83EBC6",
    lighter: "#D5F8EB",
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
    white: "#FBFBFE",
  },
};

export const space = {
  xxxs: rem(2),
  xxs: rem(4),
  xs: rem(8),
  sm: rem(12),
  base: rem(16),
  md: rem(24),
  lg: rem(32),
  xl: rem(40),
  xxl: rem(48),
  xxxl: rem(64),
};

export const radius = {
  base: "2px",
  lg: "4px",
};

export type FontWeight = 300 | 400 | 500 | 700;
export const font: {
  weight: Record<"light" | "regular" | "medium" | "bold", FontWeight>;
  size: Record<
    "xxxs" | "xxs" | "xs" | "s" | "sm" | "base" | "md" | "lg" | "xl" | "xxl",
    string
  >;
  lineHeight: Record<"paragraph" | "title", string>;
  letterSpacing: Record<"tracked", string>;
} = {
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  size: {
    xxxs: rem(10),
    xxs: rem(12),
    xs: rem(16),
    s: rem(18),
    sm: rem(20),
    base: rem(24),
    md: rem(28),
    lg: rem(32),
    xl: rem(36),
    xxl: rem(48),
  },
  lineHeight: {
    paragraph: "125%",
    title: "150%",
  },
  letterSpacing: {
    tracked: "0.02em",
  },
};
