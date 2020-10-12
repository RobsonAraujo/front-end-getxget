# Introduction
This wiki provides an overview and explains the technologies to be used to implement SPA Applications in any development oriented to this pattern.

# Front End Architecture

## Functional Overview
In order to review the functions that a system or component oriented to UI must perform, the following aspects are reviews of the main points of the front-end architecture.

- Project structure and configuration: Create new projects with minimal configuration and onboard new developers quickly and efficiently.
- Blindingly-fast performance and future-proofing: Choose libraries with performance in mind, with a large community support, it should cover a single responsibility and be a stable library

## Stack of Build Lifecycle
The components to use for build lifecycle, has been organized as shown below:

## Coding
- VSCode IDE: Developer’s main coding tool, set up with EditorConfig.org
A file .vscode paste for standardization of environment
- EditorConfig: File format and collection of text editor plugins for maintaining consistent coding styles between different editors and IDEs.

## Dependency management
- Yarn: Dependencies required for project compilation

## Compile
- Babel : Convert/transpile the newest language features to something that current browsers can understand.

## Module Bundler
- Webpack: Manage the application module bundling.

## Component development stack

- React:  for view/templating/presentation
- Global state management:  This project uses hooks and context API implementation to manage all state of application.
- Routing:  Next.js  file-system based router built on the concept of pages.
- Styled components: follows the trend of CSS in JS for predictable cross-platform visual styling. Avoid Global scope, and have a better performance.
- Typescript: Is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions. it's important for code quality and code maintenance for large applications.
- Eslint: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease and a javascript style guide to follow patterns.
- Prettier: An opinionated code formatter supports many languages and integrates with most editors.
- SSR (Server Side Rendering): Next.js is a lightweight framework for static and server-rendered applications, it will help with performance and SEO, and easy and stable implementation for SSR.

## Testing
- Cypress: Cypress tests anything that runs in a web browser. All of the architecture surrounding Cypress is built to handle modern JavaScript frameworks especially well. We have hundreds of projects using the latest React, Angular, Vue, Elm, etc. frameworks. Cypress also works equally well on older server rendered pages or applications. Writing end-to-end tests takes a lot of different tools to work together. With Cypress you get . There is no need to install 10 separate tools and libraries to get your test suite set up. We have taken some of the best-in-class tools you are likely already familiar with and made them all work together seamlessly.

- Cypres React Unit test: A little helper to unit test React components in the open source Cypress.io E2E test runner v4.5.0+

# Code Organization

## Conventional Commit pattern
A specification for adding human and machine readable meaning to commit messages

## Tools
- Husky can prevent bad git commit, git push and more.
- Commitizen: When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time.

## Naming conventions
- camelCase: Use camelCase when naming objects, functions, and instances.
- PascalCase: Use PascalCase when naming stateless components and stateful components


