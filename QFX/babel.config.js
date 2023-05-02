module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg˝'],
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@services': './src/services',
          '@config': './src/config',
          '@mock': './src/Mock',
          '@redux': './src/redux',
          '@context': './src/context',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
