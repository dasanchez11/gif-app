import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";
import React from "react";

describe("Test <GifGridItem/>", () => {
  let title;
  let url;

  beforeEach(() => {
    title = "itemTitle";
    url = "urlString";
  });

  test("should match snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Should show image with url and alt", () => {
    const title = "itemTitle";
    const url = "urlString";
    render(<GifGridItem title={title} url={url} />);
    const image = screen.getByRole("img");
    const src = image.getAttribute("src");
    const alt = image.getAttribute("alt");
    expect(src).toEqual(url);
    expect(alt).toEqual(title);
  });

  test("should show title", () => {
    render(<GifGridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
