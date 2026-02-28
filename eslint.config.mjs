import js from "@eslint/js";

export default [
  {
    ignores: ["dist/", "node_modules/"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: {
        require: "readonly",
        module: "readonly",
        exports: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-const-assign": "warn",
      "no-this-before-super": "warn",
      "no-undef": "warn",
      "no-unreachable": "warn",
      "no-unused-vars": "warn",
      "constructor-super": "warn",
      "valid-typeof": "warn",
    },
  },
];
