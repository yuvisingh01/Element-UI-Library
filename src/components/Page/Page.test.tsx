import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Page from ".";

describe("Page", () => {
  it("renders title and children", () => {
    // Arrange
    const title = "Test Title";
    const children = "Test Children";
    const { getByText } = render(<Page title={title}>{children}</Page>);

    // Act
    const titleElement = getByText(title);
    const childrenElement = getByText(children);

    // Assert
    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });

  it("render the correct styling", () => {
    // Arrange
    const title = "Test Title";
    const children = "Test Children";
    const { getByText, getByTestId } = render(
      <Page title={title}>{children}</Page>
    );

    // Act
    const container = getByTestId("page-container");
    const titleElement = getByText(title);
    const childrenElement = getByText(children);

    // Assert
    expect(container).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
    expect(container).toHaveStyle(`
        background-color: #f5f5f5;
        height: 100vh;
      `);

    expect(titleElement).toHaveStyle(`
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #333;
      `);
    expect(childrenElement).toHaveStyle(`
        font-size: 1.5rem;
        color: #666;
      `);
  });
});
