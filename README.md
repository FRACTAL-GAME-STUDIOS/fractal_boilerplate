# Fractal Studio Boilerplate

## Description

This is a TypeScript boilerplate for FiveM developed by Fractal Game Studios. The project is designed to be a solid foundation for FiveM application development using TypeScript.

## Installation

To install the project dependencies, run:

```bash
npm i --force
```

## Usage

### Development

To start development mode, run:

```bash
npm run watch
```

### Production

To build a production version, run:

```bash
npm run build
```

## Project Structure

### `typescript` Folder

- `src/client`: Contains client-side scripts.
  - `client.ts`: Entry point for the client.
  - `controllers/index.ts`: Client controllers.

- `src/core`: Contains the core logic of the project.
  - `DB/db.ts`: Functions for database interaction.
  - `cl_bridge.ts`: Bridge between client and server.

- `src/server`: Contains server-side scripts.
  - `server.ts`: Entry point for the server.

- `src/web`: Contains the web application.
  - `app.component.html`: Main component of the web application.

### Configuration Files

- `fxmanifest.lua`: FiveM manifest file.
- `package-lock.json`: Dependency lock file.
- `package.json`: Project configuration and scripts.

## License

This project is under the MIT license.
