const home = require("./src/components/home.js");
describe("Home container has loaded", () => {
  test("working", () => {
    expect(require("../skycitybank/src/components/home.js").Home()).toBeEnabled;
  });
});
