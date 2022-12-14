import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-kamasutra.com");
  });
  test("span should be displayed", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
    expect(span.children.length).toBe(1);
    expect(span.children[0]).toBe("it-kamasutra.com");
  });
  test("input should not be displayed", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const root = component.root;
    expect(() => {
      root.findByType("input");
    }).toThrow();
  });
  test("input should be displayed in edit mode", () => {
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span");

    span.props.onDoubleClick();
    const input = root.findByType("input");

    expect(input.props.defaultValue).toBe("it-kamasutra.com");
  });
});
