import { parse } from "babylon";
import traverse from "babel-traverse";
import t from "babel-types";

interface Options {
  line: number;
  column: number;
}

const run = (code, options) => {
  const ast = parse(code);

  traverse(ast, {
    ThisExpression: path => {},
  });
};
