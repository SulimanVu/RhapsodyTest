# React Rhapsody Shell

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