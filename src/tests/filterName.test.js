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
    const inputName = screen.getByTestId("name-filter");
    userEvent.type(inputName, "oo");
    expect(screen.getAllByRole("row")).toHaveLength(3);
  });
});
