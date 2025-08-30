// eslint.config.cjs
const eslintPluginReact = require("eslint-plugin-react");
const eslintPluginReactHooks = require("eslint-plugin-react-hooks");
const eslintPluginImport = require("eslint-plugin-import");

module.exports = [
  {
    files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      import: eslintPluginImport,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
      "import/prefer-default-export": "off",
    },
    parser: "@babel/eslint-parser",
    parserOptions: {
      requireConfigFile: false,
      ecmaFeatures: { jsx: true }
    }
  },
];
