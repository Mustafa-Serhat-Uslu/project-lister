import TableContent from "./TableContent";
import mockData from "@/data/test/mockData.json";
import { describe, expect, test } from "@jest/globals";
import { render, screen, waitFor } from "@testing-library/react";

// TODO: extend tests...
describe("TableContent", () => {
  test("renders table with provided data", async () => {
    render(<TableContent data={mockData} width={1200} />);

    await waitFor(() => {
      expect(screen.getByText("Project A")).toBeInTheDocument();
      expect(screen.getByText("Project B")).toBeInTheDocument();
    });
  });
});
