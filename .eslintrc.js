module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    'react-native/react-native': true,
  },
  extends: [
    '@react-native-community',
    // 'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  rules: {
    'react-hooks/rules-of-hooks': 0,
  },
};
