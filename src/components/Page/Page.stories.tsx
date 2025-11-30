import Page from ".";

export default {
  title: "Components/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "The title of the page",
      control: {
        type: "text",
      },
    },
    children: {
      description: "The content of the page",
      control: {
        type: "text",
      },
    },
  },
};

export const PageOne = {
  args: {
    title: "Welcome to the Page Component",
    children: "This is a simple page layout component.",
  },
};
export const PageTwo = {
  args: {
    title: "Welcome to the Page Component",
    children: "This is a simple page layout component.",
  },
};
