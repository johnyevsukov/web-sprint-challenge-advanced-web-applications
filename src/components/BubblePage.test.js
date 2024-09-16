import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";


test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage/>)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  render(<BubblePage/>)
  const circles = await screen.findAllByRole("generic")
  expect(circles).toHaveLength(4)
});

//im just not sure how to grab the circles for testing on the last test

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading