const path = require('path');

module.exports = {
    entry: {
        '2.12': './src/2/2.12/2.12.js',
        '2.13': './src/2/2.13/2.13.js',
        '2.14': './src/2/2.14/import.js',
        '2.15': './src/2/2.15/person.js',
        '2.16': './src/2/2.16/person.js',
        '2.17': './src/2/2.17/spread_rest.js',
        '2.18': './src/2/2.18/destructuring.js',
        '2.19': './src/2/2.19/reference_primitives.js',
        '2.20': './src/2/2.20/array_functions.js',
        '3.26': './src/3/3.26/hello_world.jsx',
        '3.28': './src/3/3.28/index.js',
        '3.29': './src/3/3.29/index.js',
        'project_default': './src/projects/default/index.js',
        'assignment1': './src/projects/assignment1/index.js',
        'assignment2': './src/projects/assignment2/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        '@babel/preset-env', 
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            },

            {
                test: /\.css$/,
                loader: 'style-loader'
            },

            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    }
}
