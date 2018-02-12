import { Website } from "./Website";

export class Google {
    SearchFor(searchTerm :string): Website[] {
        return [
            { 
                Title: "TypeScript - JavaScript that scales", 
                Description: "TypeScript brings you optional static type-checking along with the latest ECMAScript features.", 
                Url: "https://www.typescriptlang.org/"
            },
            { 
                Title: "GitHub - Microsoft/TypeScript: TypeScript is a superset of JavaScript", 
                Description: "TypeScript is a language for application-scale JavaScript. TypeScript adds optional types, classes, and modules to JavaScript. TypeScript supports tools for large-scale JavaScript applications for any browser, for any host, on any OS.", 
                Url: "https://github.com/Microsoft/TypeScript"
            },
            { 
                Title: "cucumber-tsflow - npm", 
                Description: "Bindings provide the automation that connects a specification step in a Gherkin feature file to some code that executes for that step. When using Cucumber with TypeScript you can define this automation using a 'binding' class: import { binding } from \"cucumber-tsflow\";", 
                Url: "https://www.npmjs.com/package/cucumber-tsflow"
            }
        ]
    }
}