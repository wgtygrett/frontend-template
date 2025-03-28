# General Angular Spiel:
Note: 
This may not work entirely to spin up the app.
I've only done it on one machine so far, and that included some aspects that may be unintuitive (meaning, had to specify no-standalone). Try it but you've been warned. You may have to debug.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## About the project
This is an exercise in TailwindCSS (more specifically, v3).

## Questions Asked:
- **Q:** Why `standalone: false`?
  - **A:** This was a legacy project and meant to maintain backwards compatibility.

- **Q:** Why all the Beatles references?
  - **A:** They're one of my favorite bands. Yes, *really*.

- **Q:** Why use Tailwind v3 over v4?
  - **A:** It's (likely) more widely used, stable, and developed a while ago. The fundamentals are the same.

- **Q:** Where is this hosted?
  - **A:** Unfortunately for the world I've decided to host this [here](https://wendytygrett.me). If it doesn't work... I forgot to renew the domain. Oops!

## Upcoming Enhancements:
- Fixes to the Karma + Jasmine tests
- Asset inclusion (pictures, additional icons)
- Selenium testing once measurable things are added (forms that have requirements, buttons that should/shouldn't be clicked, etc.); for now this is just an example template of components.
- Add a tab module.
- Add a content box/info section module (that can hold above tabs).