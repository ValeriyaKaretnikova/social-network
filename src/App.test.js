import { render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import SamuraiJSApp from "./App";

it("renders App", () => {
  const div = document.createElement("div");
  render(<SamuraiJSApp />, div);
  unmountComponentAtNode(div);
});
