import { When, Then, Context } from './GoogleSearchSteps'
import { Website } from '../src/Website';


describe("GoogleSearch", () => {
  let context = new Context();
  let when = new When(context);
  let then = new Then(context);

  it("Search for TypeScript on Google", () => {
    when.ISearchOnGoogleFor("TypeScript");
    then.IShouldGetResultsRelatedTo("TypeScript");
  });
});