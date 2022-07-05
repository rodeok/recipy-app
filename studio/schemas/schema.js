import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import chef from "./chef";
import ingredient from "./ingredient";
import recipe from "./recipe";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    chef,
    ingredient,
    recipe,
  ]),
});