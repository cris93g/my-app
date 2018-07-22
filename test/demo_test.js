import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import { createOrders } from "../src/redux/ducks/itemsReducer";

describe("component:createOrders", () => {
  it("creates orders well", () => {
    expect(shallow(<createOrders />));
  });
});
