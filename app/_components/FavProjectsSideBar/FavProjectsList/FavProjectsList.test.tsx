import React from "react";
import FavProjectsList from "./FavProjectsList";
import { FavoritesData } from "@/app/_types/types";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

describe("FavProjectsList", () => {
  const mockFavorites: FavoritesData = {
    "1": "Project A",
    "2": "Project B",
    "3": "Project C",
  };

  it("renders the list header correctly", () => {
    render(<FavProjectsList optimisticFavProjects={{}} />);
    expect(screen.getByText("Favorite Projects")).toBeInTheDocument();
  });

  it("renders a list of favorite projects", () => {
    render(<FavProjectsList optimisticFavProjects={mockFavorites} />);

    Object.values(mockFavorites).forEach((projectName) => {
      expect(screen.getByText(projectName)).toBeInTheDocument();
    });
  });

  it("renders a NavigateButton for each project", () => {
    render(<FavProjectsList optimisticFavProjects={mockFavorites} />);

    expect(screen.getAllByTestId("navigate-button")).toHaveLength(
      Object.keys(mockFavorites).length
    );
  });

  it("renders an empty list when there are no favorite projects", () => {
    render(<FavProjectsList optimisticFavProjects={{}} />);
    expect(screen.queryAllByTestId("navigate-button")).toHaveLength(0);
  });
});
