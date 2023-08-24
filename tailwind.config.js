/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const rem = (num) => ({ [num]: `${num / 16}rem` });

const colors = {
  // Background
  netural: "#F1F5F9",
  "netural-dark": "#ECEBED",

  // Button
  "button-primary": "#4C42D7",
  "button-primary-hover": "#393388",

  "button-disabled": "#E1E1E1",

  // Text
  primary: "#191E3B",
  secondary: "#8E9CB2",
};

const typography = {
  fontSize: {
    ...rem(6),
    ...rem(11),
    ...rem(13),
    ...rem(15),
    ...rem(17),
    ...rem(18),
    ...rem(25),
  },
  lineHeight: {
    1: 1,
    ...rem(13),
    ...rem(18),
    ...rem(20),
    ...rem(22),
    ...rem(23),
    ...rem(28),
  },
  letterSpacing: {
    normal: `${0.3 / 16}rem`,
    ...rem(2),
  },
};

const spacing = {
  px: "1px",
  0: "0",
  ...rem(1),
  ...rem(2),
  ...rem(3),
  ...rem(4),
  ...rem(5),
  ...rem(8),
  ...rem(14),
  ...rem(15),
  ...rem(16),
  ...rem(24),
  ...rem(40),
  ...rem(215),
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    ...typography,
    fontFamily: {
      sans: ["Josefin Sans"],
      montserrat: ["Montserrat"],
      kanit: ["Kanit"],
      opensans: ["Open Sans"],
    },
    extend: {
      colors,
      spacing,
      borderRadius: {
        ...rem(3),
        ...rem(5),
      },
      borderWidth: {
        ...rem(1),
      },
    },
  },
  plugins: [],
};
