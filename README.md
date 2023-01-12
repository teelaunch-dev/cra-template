# Create React App Kingdom Version

To use it just

```
yarn create react-app my-app --template TechReact
```

or

```
npx create-react-app my-app --template TechReact
```

### Structure

We're following a pretty straight forward structure, [simply move files around until it feels right](https://react-file-structure.surge.sh/).

```
   src
   ├── components
   │   └── Input
   │       ├── __tests__
   │       │   └── Input.tests.tsx
   │       └── Input.tsx
   ├── containers
   │   └── Login
   │       ├── __tests__
   │       │   └── Login.tests.tsx
   │       └── Login.tsx
   ├── utils
   │   └── constants.ts
   ├── __tests__
   │   └── App.test.tsx
   ├── reducs
   │   └── actions
   │   └── types
   │   └── reducers
   ├── styles
   │   └── theme.ts
```

### Theming

This theme is used to boost our productivity in the coming projects

### Authorization

In order to handle Authorization we split the App in two.

- **AuthorizedApp**: Where we maintain every authorized route
- **UnAuthorizedApp**: Where we maintain every unauthorized route

We're leveraging code-splitting to only load the App that our user currently is.

