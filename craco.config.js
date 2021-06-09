const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // config less variable here
            modifyVars: {
              '@primary-color': '#49FFA1',
              '@link-color': '#0fcd8c',
              '@logo-color': '#39E1A4',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
