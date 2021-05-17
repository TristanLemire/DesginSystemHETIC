import { rem } from "polished";

export const colors = {
  primary: {
    light: "#016FE5",
    base: "#004080",
    dark: "#00152A",
  },
  secondary: {
    light: "#016FE5",
    base: "#004080",
    dark: "#00152A",
  },
  tertiary: {
    light: "#016FE5",
    base: "#004080",
    dark: "#00152A",
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
