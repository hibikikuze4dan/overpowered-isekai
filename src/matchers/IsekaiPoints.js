import { Matcher } from "interweave";

export class IsekaiPointsMatcher extends Matcher {
  match(str) {
    const result = str.match(/Isekai points|[0-9]{1,3} Isekai points|0/);

    if (!result) {
      return null;
    }

    return {
      index: result.index,
      length: result[0].length,
      match: result[0],
      valid: true,
    };
  }

  replaceWith(children, props) {
    return (
      <span className="Interweave-Green" {...props}>
        {children}
      </span>
    );
  }

  asTag() {
    return "span";
  }
}
