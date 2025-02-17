import { SayHelloProps } from "./types";

export function sayHello({ firstName, lastName, age }: SayHelloProps) {
  console.log(firstName, lastName, age);
}
