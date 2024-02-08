const path = require('path');

const root = path.resolve(__dirname, '..');

module.exports = {
  '@': path.resolve(root, 'src'),
  react: path.resolve(root, 'node_modules', 'react'),
  'react-dom': path.resolve(root, 'node_modules', 'react-dom'),
  'react-router-dom': path.resolve(root, 'node_modules', 'react-router-dom'),
  'react-router': path.resolve(root, 'node_modules', 'react-router'),
  axios: path.resolve(root, 'node_modules', 'axios'),
};
