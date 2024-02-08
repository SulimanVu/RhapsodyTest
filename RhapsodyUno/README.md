# React Rhapsody Uno

This project demonstrates a scalable and maintainable frontend architecture using Feature-Sliced Design (FSD) and Webpack's Module Federation. It is designed to showcase best practices for building large-scale applications in React with a focus on modularity, reusability, and ease of development.

## Architecture Overview

### Feature-Sliced Design (FSD)

Our project follows the Feature-Sliced Design methodology, organizing the codebase into specific layers to improve modularity and facilitate feature development:

- **features/**: Contains all the feature modules, each encapsulating a distinct piece of functionality.
- **entities/**: Holds global entities of the application, shared across features.
- **shared/**: Includes all the shared utilities, components, and hooks that can be reused across the entire application.
- **app/**: Contains core initialization and configuration of the application, such as store setup and routing.
- **pages/**: Composes features and entities into the final UI presented to the user.

### Module Federation

We leverage Webpack's Module Federation to share a common state store across multiple micro-frontends, enabling a unified and consistent state management strategy across our application ecosystem.

## State Management

### Choosing a State Manager for Module Federation

For our project, we've chosen **Redux** as the state management library. Redux's predictable state container works well with Module Federation, allowing us to share and synchronize state across different parts of our application seamlessly.

### Shared Store Configuration

#### Host Configuration

The main application (host) exposes the Redux store to other micro-frontends:

```javascript
// webpack.config.js
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      exposes: {
        './store': './src/app/store', // Expose the Redux store
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ],
};
```
