/* eslint-disable no-undef */
import Test from "../classTest";

describe("class test", () => {
  it("should return as expected", () => {
    const test = new Test("hello");
    expect(test.showName()).toEqual("hello");
  });
});
