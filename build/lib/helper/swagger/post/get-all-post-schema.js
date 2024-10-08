"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lib/helper/swagger/post/get-all-post-schema.ts
var get_all_post_schema_exports = {};
__export(get_all_post_schema_exports, {
  getAllPostSchema: () => getAllPostSchema
});
module.exports = __toCommonJS(get_all_post_schema_exports);
var getAllPostSchema = {
  schema: {
    summary: "Get all post",
    description: "This method returns a list of registered posts in the blog",
    tags: ["post"],
    querystring: {
      page: {
        type: "number"
      },
      limit: {
        type: "number"
      }
    },
    response: {
      200: {
        description: "Successful response",
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string", format: "uuid" },
            title: { type: "string" },
            content: { type: "string" },
            createdat: {
              type: "string",
              format: "date",
              example: "2022-07-01"
            },
            idteacher: { type: "number" },
            name: { type: "string" },
            school_subject: { type: "string" }
          }
        }
      }
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getAllPostSchema
});
