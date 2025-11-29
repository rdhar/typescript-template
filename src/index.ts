interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Alice",
  id: 1
};

console.log(user);

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet(user.name));
