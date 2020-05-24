import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#fff",
    black: "#000",

    main: "#8506A9",
    secondaryA: "#00A383",
    secondaryB: "#FF9A00",

    mainLight: "#BB63D4",
    secondaryLightA: "#5ED1BA",
    secondaryLightB: "#FFC873",

    mainDark: "#56026E",
    secondaryDarkA: "#006A55",
    secondaryDarkB: "#A66400",

    gray: "#bbbbbb",
    grayLight: "#ededed",
    grayDark: "#aaaaaa",

    green: "#7ed321",
    orange: "#ff9900",
    red: "#fe4200",
    blue: "#00c8f3"
  },
  fontSizes: {
    xs: "10px",
    s: "12px",
    sm: "14px",
    m: "15px",
    md: "16px",
    l: "17px",
    xl: "20px",
    xxl: "36px"
  },
  fontWeights: {
    normal: 400,
    bold: 500,
    bolder: 700
  },
  gradients: {
    main: ["#56026E", "#BB63D4"],
    secondaryA: ["#006A55", "#5ED1BA"],
    secondaryB: ["#A66400", "#FFC873"]
  },
  borderRadius: 50,
  fontFamily: '"Roboto", sans-serif'
};

export default props => <ThemeProvider theme={theme} {...props} />;
