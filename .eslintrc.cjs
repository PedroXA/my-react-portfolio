module.exports = {
  parser: '@typescript-eslint/parser', // Define o parser para TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Define a versão do ECMAScript
    sourceType: 'module', // Define o uso de módulos ECMAScript
  },
  extends: [
    'eslint:recommended', // Regras recomendadas pelo ESLint
    'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
    'plugin:prettier/recommended', // Integra com Prettier
  ],
  plugins: [
    '@typescript-eslint', // Usado para linting do TypeScript
    'prettier', // Integra Prettier com ESLint
  ],
  rules: {
    // Regras personalizadas
    'no-console': 'warn', // Aviso ao invés de erro para console.log
    'no-debugger': 'warn', // Aviso ao invés de erro para debugger
    '@typescript-eslint/no-unused-vars': ['warn'], // Aviso para variáveis não usadas
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'es5' }], // Integra com Prettier
    'eqeqeq': ['warn', 'always'], // Força o uso de `===` ao invés de `==`
    'semi': ['error', 'always'], // Exige ponto e vírgula
    'quotes': ['error', 'single'], // Exige o uso de aspas simples
    'indent': ['error', 2], // Força indentação de 2 espaços
  },
};
