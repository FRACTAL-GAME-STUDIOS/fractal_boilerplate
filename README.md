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

MIT License

Copyright (c) 2023 Fractal Game Studios

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

