# Typescript Template

## 1. Create your repository 👩🏻‍💻

Start with a clean foundation. Head to <https://github.com/new>, add a README, and choose Node.js .gitignore. This keeps your project organized from the very first commit.

## 2. Initialize TypeScript 🔥

Add TypeScript support in seconds with npm. This gives you a tsconfig.json that enforces types and catches errors early.

```fish
npm init -y
npm install --save-dev typescript ts-node @types/node
npx tsc --init
```

> 💡 Pro tip: TypeScript often figures out types without you lifting a finger. For example:

```typescript
let helloWorld = "Hello World";
```

TypeScript knows this is a `string`, no extra syntax required.

## 3. Write your first file 📂

Create `src/index.ts` and add your first typed function:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("GitHub"));
```

After all, strong typing makes even simple scripts more reliable by catching type mismatches and logic errors before they run. Then, commit and push to see your repository come to life.

> 💡 Pro tip: Strong typing isn't just for strings and numbers. Define an interface, like:

```typescript
interface User {
  name: string;
  id: number;
}
```

Now if your object doesn't match the shape, TypeScript will catch it instantly.

## 4. Add GitHub Actions for CI ⚙️

Let GitHub handle your checks automatically with a simple workflow. Every push and pull request will be type-checked and ready to run, as automation helps prevent broken builds and speeds up reviews.

```yaml
name: Build
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: node-version: 20
      - run: npm install
      - run: npx tsc --noEmit
```

## 5. Supercharge with Copilot 🤖

Copilot + TypeScript = productivity with guardrails. Try prompting:

```typescript
// TODO: Add a function that fetches the latest GitHub issues for a repository
```

Copilot will generate a typed async function with Octokit, giving you safe, production-ready code, so you can focus on logic instead of boilerplate.

> 💡 Pro tip: TypeScript uses structural typing: if it walks like a duck and quacks like a duck, it type-checks. These "shape contracts" are exactly what give Copilot the guardrails to suggest safe, production-ready code.

And voilà! You're all set to start building the future with the new king of kings: TypeScript. 👑
