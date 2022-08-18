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

    const selectColumn = screen.getByTestId('column-sort');
    const radioAsc = screen.getByLabelText('ASC')
    const radioDesc = screen.getByLabelText('DESC')
    const columnSortButton = screen.getByTestId('column-sort-button')
    userEvent.selectOptions(selectColumn, "rotation_period");
    userEvent.click(radioAsc);
    userEvent.click(columnSortButton);
    userEvent.click(radioDesc);
    userEvent.click(columnSortButton);

  });
});
