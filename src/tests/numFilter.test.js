import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockData from "../../cypress/mocks/testData";
import App from "../App";

beforeEach(() => {
  jest.spyOn(global, "fetch").mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );
});
afterEach(() => {
  jest.resetAllMocks();
});

describe("algum teste", () => {
  it("algum it", async () => {
    render(<App />);
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    const selectColumn = screen.getByTestId("column-filter");
    const selectComparison = screen.getByTestId("comparison-filter");
    const selectValue = screen.getByTestId("value-filter");
    const buttonFilter = screen.getByTestId("button-filter");
    userEvent.click(buttonFilter)
    userEvent.selectOptions(selectColumn, 'rotation_period');
    userEvent.selectOptions(selectComparison, 'menor que');
    userEvent.type(selectValue,'200');
    userEvent.click(buttonFilter)
    userEvent.selectOptions(selectColumn, 'orbital_period');
    userEvent.selectOptions(selectComparison, 'igual a');
    userEvent.type(selectValue,'100');
    userEvent.click(buttonFilter)
  });
});
