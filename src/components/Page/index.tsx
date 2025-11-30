import React from "react";
import { Children, Container, Typography } from "./styled";
import type { PageProps } from "./types";

const Page: React.FC<PageProps> = ({ title, children }: PageProps) => {
  return (
    <Container data-testid="page-container">
      {title && <Typography>{title}</Typography>}
      <Children>{children}</Children>
    </Container>
  );
};

export default Page;
