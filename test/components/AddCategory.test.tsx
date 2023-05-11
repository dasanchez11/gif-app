import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Test <AddCategory/>", () => {
  test("should change the input value", () => {
    const mockCategory = jest.fn();
    const mockValue = "mock value";
    const { container } = render(<AddCategory onNewCategory={mockCategory} />);
    const inputElement = screen.getByRole("textbox");

    fireEvent.input(inputElement, { target: { value: mockValue } });

    expect(inputElement.getAttribute("value")).toEqual(mockValue);
  });

  test("should call on new category if input has value", () => {
    const newCategory = jest.fn();
    const mockInputValue = "mock value";
    render(<AddCategory onNewCategory={newCategory} />);
    const inputElement = screen.getByRole("textbox");
    const formElement = screen.getByRole("form");
    fireEvent.input(inputElement, { target: { value: mockInputValue } });
    fireEvent.submit(formElement);
    expect(inputElement.getAttribute("value")).toEqual("");
    expect(newCategory).toHaveBeenCalledTimes(1);
    expect(newCategory).toHaveBeenCalledWith(mockInputValue);
  });

  test("should not call new category if input has no value", () => {
    const newCategory = jest.fn();
    const mockInputValue = "";
    render(<AddCategory onNewCategory={newCategory} />);
    const inputElement = screen.getByRole("textbox");
    const formElement = screen.getByRole("form");
    fireEvent.input(inputElement, { target: { value: mockInputValue } });
    fireEvent.submit(formElement);
    expect(newCategory).not.toHaveBeenCalled();
  });
});
