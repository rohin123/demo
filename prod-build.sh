cp ./src/utils/constants.prod.js ./src/utils/constants.js
webpack --config webpack.config.server.js
cp ./src/utils/constants.local.js ./src/utils/constants.js