module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    createClass: "createReactClass",
    pragma: "React",
    version: "detect",
    flowVersion: "0.53",
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "no-console": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".ts", "tsx"],
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "none",
      },
    ],
    "global-require": "off",
    "import/prefer-default-export": "off",
    "react/jsx-wrap-multilines": "off",
    "react/state-in-constructor": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "no-async-promise-executor": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-script-url": "off",
    "no-return-assign": "off",
    "consistent-return": "off",
    "react/static-property-placement": "off",
    "react/jsx-curly-newline": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    // "no-empty": "error",
  },
};
