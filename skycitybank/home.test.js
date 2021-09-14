const home = require("./src/components/home.js");
describe("Home container has loaded", () => {
  test("working", () => {
    expect(home.Home()).toReturnWith(<div></div>);
  });
});
