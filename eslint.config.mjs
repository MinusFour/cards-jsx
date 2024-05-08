import globals from "globals";
import pluginJs from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  {
      files: ["**/*.js", "**/*.mjs", "**/*.jsx"],
      plugins: {
          react,
      },
      languageOptions: {
          globals: globals.node,
          parserOptions: {
              ecmaFeatures: {
                  jsx: true
              }
          }
      },
      rules: {
          'react/jsx-uses-react': 'error',
          'react/jsx-uses-vars': 'error',
      },
      settings: {
          "react":{
              "pragma":"jsx"
          }
      }
  },
  pluginJs.configs.recommended,
];
