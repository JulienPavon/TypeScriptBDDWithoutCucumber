import { Website } from "../src/Website";
import { Google } from "../src/Google";

export class Context {
    public ActualResults: Website[] = [];
}

export class When {
    context :Context;

    constructor(context :Context) {
        this.context = context;
    }

    ISearchOnGoogleFor(searchTerm: string) {
        let google = new Google();
        this.context.ActualResults = google.SearchFor(searchTerm);
    }
}

export class Then {
    context :Context;

    constructor(context :Context) {
        this.context = context;
    }
    IShouldGetResultsRelatedTo(expectedTerm: string) {
        this.context.ActualResults.forEach(result => {
            expect(result.Description).toMatch(expectedTerm);
        });
    }
}