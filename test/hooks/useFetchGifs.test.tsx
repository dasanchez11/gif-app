import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";
import * as gifFetch from "../../src/helpers/getGifs";
import { mockGifResponseData } from "../helpers/mock-response-data";

describe("Tests in useFetchGifs", () => {
  test("should return initial state", () => {
    const { result } = renderHook(() => useFetchGifs("category"));
    const { loading, images } = result.current;
    expect(images.length).toBe(0);
    expect(loading).toBe(true);
  });

  test("should return image arry and loading false", async () => {
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

    const mockFetch = jest
      .spyOn(gifFetch, "getGifs")
      .mockReturnValueOnce(Promise.resolve(mockImages));

    const { result } = renderHook(() => useFetchGifs("category"));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { loading, images } = result.current;
    console.log({ loading, images });
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(images.length).toBe(2);
    expect(images).toEqual(mockImages);
    expect(loading).toBeFalsy();
  });
});
