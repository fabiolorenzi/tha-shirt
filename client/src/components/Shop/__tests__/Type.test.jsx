import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import Type from "../Type.jsx";

afterEach(cleanup);

test("Container renders properly", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <Type />
            </Router>
        </Provider>
    );

    const container = getByTestId("typeContainer");

    expect(container.className).toContain("typeContainer");
});