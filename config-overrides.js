const { override, fixBabelImports, addLessLoader, addPostcssPlugins } = require('customize-cra');


module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            // 'primary-button-fill': 'yellow',
            // 'primary-button-fill-tap': 'pink'
        }
    }),
    addPostcssPlugins([require("postcss-px2rem")({ remUnit: 37.5 })])
);