export class Pedro {
  constructor(private name: string, private lastname: string) {}

  greetings() {
    return `Hello ${this.name} ${this.lastname}`;
  }
}
