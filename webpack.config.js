const path = require('path');

module.exports = {
    entry: {
        '2.12': './src/2/2.12/2.12.js',
        '2.13': './src/2/2.13/2.13.js',
        '2.14': './src/2/2.14/import.js',
        '2.15': './src/2/2.15/person.js',
        '2.16': './src/2/2.16/person.js',
        '2.17': './src/2/2.17/spread_rest.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        '@babel/preset-env', 
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            }
        ]
    }
}
