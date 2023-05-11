import { render } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import * as fetch from "../../src/hooks/useFetchGifs";

describe("Test <Gifgrid]/>", () => {
  const cateory = "category";
  test("should should display loading initially", () => {
    const returnValue = {
      loading: true,
      images: [],
    };

    jest.spyOn(fetch, "useFetchGifs").mockReturnValueOnce(returnValue);
    const loadingMessage = "Loading...";
    const { container, getByRole } = render(<GifGrid category={cateory} />);
    const loadingElement = getByRole("heading", { level: 2 });
    const categoryElement = getByRole("heading", { level: 3 });
    expect(loadingElement.textContent).toEqual(loadingMessage);
    expect(categoryElement.textContent).toEqual(cateory);
    expect(container).toMatchSnapshot();
  });

  test("should display images", () => {
    const mockImages = [
      {
        id: "abce",
        title: "title",
        url: "urlpage",
      },
      {
        id: "def",
        title: "title2",
        url: "urlpage2",
      },
    ];
    const returnValue = {
      loading: false,
      images: mockImages,
    };
    jest.spyOn(fetch, "useFetchGifs").mockReturnValueOnce(returnValue);
    const { container, getAllByRole } = render(<GifGrid category={cateory} />);
    const cards = getAllByRole("img");
    expect(cards.length).toEqual(2);
  });
});
