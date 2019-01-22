module.exports = [{
    entry: './estilos/app.scss',
    output: {
        filename: 'style-bundle.js', //nombre forzoso
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'bundle.css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            }
        ]
    },
}];