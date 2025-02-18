type SayHelloProps = {
    firstName: string;
    lastName?: string;
    age?: number;
};

declare function sayHello({ firstName, lastName, age }: SayHelloProps): void;

declare class Pedro {
    private name;
    private lastname;
    constructor(name: string, lastname: string);
    greetings(): string;
}

export { Pedro, type SayHelloProps, sayHello };
