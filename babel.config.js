module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'react-app'],
  plugins: [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
};
