import {
  optimisticFavoritesReducer,
  OptimisticFavoritesAction,
} from "../ProjectsContextActions";
import { FavoritesData, Project } from "@/app/_types/types";
import { describe, expect, it } from "@jest/globals";

describe("optimisticFavoritesReducer", () => {
  it("should set the favorites data when action type is SET", () => {
    const initialState: FavoritesData = {};
    const action: OptimisticFavoritesAction = {
      type: "SET",
      favoritesData: { "1": "Project A", "2": "Project B" },
    };
    const newState = optimisticFavoritesReducer(initialState, action);
    expect(newState).toEqual(action.favoritesData);
  });

  it("should add a new project when action type is SAVE", () => {
    const initialState: FavoritesData = {};
    const project: Project = {
      projectId: "3",
      projectName: "Project C",
      description: "Test project",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      projectManager: "John Doe",
    };
    const action: OptimisticFavoritesAction = { type: "SAVE", project };
    const newState = optimisticFavoritesReducer(initialState, action);
    expect(newState).toEqual({ "3": "Project C" });
  });

  it("should not duplicate project if it already exists when action type is SAVE", () => {
    const initialState: FavoritesData = { "3": "Project C" };
    const project: Project = {
      projectId: "3",
      projectName: "Project C",
      description: "Test project",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      projectManager: "John Doe",
    };
    const action: OptimisticFavoritesAction = { type: "SAVE", project };
    const newState = optimisticFavoritesReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it("should toggle a project from favorites when action type is TOGGLE", () => {
    const initialState: FavoritesData = { "4": "Project D" };
    const project: Project = {
      projectId: "4",
      projectName: "Project D",
      description: "Test project",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      projectManager: "John Doe",
    };
    const action: OptimisticFavoritesAction = { type: "TOGGLE", project };
    const newState = optimisticFavoritesReducer(initialState, action);
    expect(newState).toEqual({});
  });

  it("should add a project to favorites when action type is TOGGLE and it does not exist", () => {
    const initialState: FavoritesData = {};
    const project: Project = {
      projectId: "5",
      projectName: "Project E",
      description: "Test project",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      projectManager: "John Doe",
    };
    const action: OptimisticFavoritesAction = { type: "TOGGLE", project };
    const newState = optimisticFavoritesReducer(initialState, action);
    expect(newState).toEqual({ "5": "Project E" });
  });

  it("should return the current state for an unknown action type", () => {
    const initialState: FavoritesData = { "6": "Project F" };
    const action = {
      type: "UNKNOWN_ACTION",
    } as unknown as OptimisticFavoritesAction;
    const newState = optimisticFavoritesReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
