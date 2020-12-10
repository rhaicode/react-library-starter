module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'))

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    }
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    })
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', assetLoader],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
