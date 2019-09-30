# Ink Lesson 1

Duration 15mins

For this lesson you should know a little bit about `async/await`, `jsx` and what a `map` function does to an `Array`.

## Setup Project

### Create A Package

```bash
yarn init
```

### Add Dependencies

```bash
yarn add ink react
```

### Add Developer Dependencies

```bash
yarn add typescript ts-node @types/node -D
```

### Create TypeScript Config

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "target": "es6",
    "module": "commonjs",
    "moduleResolution": "node",
    "jsx": "react",
    "outDir": "dist",
    "sourceMap": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  },
  "include": ["src/**/*"]
}
```

### Create Entry File

```bash
mkdir src
cd src
touch index.tsx
```

## Hello World in Ink

Open `src/index.tsx` in editor.

### Import React

```typescript jsx
import React from 'react';
```

### Import Ink

```typescript jsx
import { render, Box } from 'ink';
```

### Setup Ink Render

```typescript jsx
render(<Box>Hello Somo</Box>);
```

### Run CLI!

```bash
npx ts-node src
```

### Add Develop Script to package.json

```json
  "scripts": {
    "develop": "npx ts-node src"
  },
```

### Run npm/yarn script

```bash
yarn develop
```

## Fetch Data from API

### Tidy render

```typescript jsx
const App = () => {
  return (
    <Box>Hello Somo</Box>
  );
};

render(<App />);
```

### Import react hooks

```typescript jsx
import React, { useEffect, useState } from 'react';
```

### Add a state hook

```typescript jsx
const [data, setData] = useState([]);
```

### Add a useEffect hook

```typescript jsx
useEffect(() => {
  // do something
}, []);
```

### Add node-fetch as a dependency

```bash
yarn add node-fetch
yarn add @types/node-fetch -D
```

### Import node-fetch

```typescript jsx
import fetch from 'node-fetch';
```

### Fetch data from API in the effect hook

```typescript jsx
async function getData() {
  const response = await fetch('https://status-sandbox.cinch.somo-tools.com/healthchecks-api');
  setData(await response.json());
}

getData().catch();
```

### Map over data

Use the array map inside a jsx expression to iter of the array.
Remember each child of a map needs to have a key.

```typescript jsx
  return (
    <Box>
      {data.map((d) => <Box key={d.id}>{d.name}</Box>)}
    </Box>
  );
```

Expand...

```typescript jsx
return (
    <Box>
      {['name', 'status'].map((col) => (
        <Box key={col} flexDirection={'column'}>
          {data.map((d) => (
            <Box key={d.id}>
              <Box paddingRight={2}>{d[col]}</Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
);
```
