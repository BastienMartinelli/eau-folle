import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./blockContent";
import post from "./post";
import product from "./product";
import contact from "./contact";
import pages from "./pages";

export const schema = [post, blockContent, product, contact, pages];
export default schema;
