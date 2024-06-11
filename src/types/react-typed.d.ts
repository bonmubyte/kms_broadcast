declare module "react-typed" {
  import { Component } from "react";

  interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    backDelay?: number;
    loop?: boolean;
    showCursor?: boolean;
  }

  class Typed extends Component<TypedProps> {}

  export default Typed;
}
