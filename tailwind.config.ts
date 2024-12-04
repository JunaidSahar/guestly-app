import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "medium-purple": {
          "50": "#e7e6ff",
          "100": "#b7b3fe",
          "200": "#8680fe",
          "300": "#564efe",
          "400": "#ad96ef",
          "500": "#564efe",
          "600": "#564efe",
          "700": "#261bfd",
          "800": "#261bfd",
          "900": "#261bfd",
          "950": "#261bfd",
        },
        alabaster: {
          "50": "#f9f9f9",
          "100": "#efefef",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
        },
      },
      transitionProperty: {
        width: "width"
      }
    },
  },
};