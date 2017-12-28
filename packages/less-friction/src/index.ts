import { parse } from "babylon";
import traverse from "babel-traverse";
import generate from "babel-generator";
import t from "babel-types";

interface Options {
  line: number;
  column: number;
}

const run = (code: string, options: Options) => {
  const ast = parse(code);

  traverse(ast, {
    ThisExpression: path => {
      path.getBindingIdentifiers();
    },
  });

  return generate(ast, {}, code);
};

export default run;
