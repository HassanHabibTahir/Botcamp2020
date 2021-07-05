// import React from "react";
// import { shallow } from "enzyme";
// import App from "../App";
// import Timer from "../Timer/Time";

// describe("App component render", () => {
//   let container = shallow(<Timer />);
// });
import React from "react";
import { shallow } from "enzyme";
import Timer from "../Timer/Time";

describe("mounted Timer", () => {
  let container: any;

  beforeEach(() => (container = <Timer />));

  it("invokes startTimer when the start button is clicked", () => {
    const spy = jest.spyOn(container.instance(), "startTimer");
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find(".start-timer").first().simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("invokes stopTimer when the stop button is clicked", () => {
    const spy = jest.spyOn(container.instance(), "stopTimer");
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find(".stop-timer").first().simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("invokes resetTimer when the reset button is clicked", () => {
    const spy = jest.spyOn(container.instance(), "resetTimer");
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find(".reset-timer").first().simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
