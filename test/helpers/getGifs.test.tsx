import { GifImage, getGifs } from "../../src/helpers/getGifs";
import { mockGifResponseData } from "./mock-response-data";

describe("Test for GetFifs", () => {
  test("should call fetch method and return the correct array", async () => {
    const mockData = mockGifResponseData;
    const mockGlobalFetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({ data: mockData }) })
    ) as jest.Mock;

    const mockFetch = jest
      .spyOn(window, "fetch")
      .mockImplementation(mockGlobalFetch);

    const expectedGifs: GifImage[] = mockData.map((img: any) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    const category = "category";
    const gifsResult = await getGifs(category);

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(expectedGifs).toEqual(gifsResult);
  });
});
