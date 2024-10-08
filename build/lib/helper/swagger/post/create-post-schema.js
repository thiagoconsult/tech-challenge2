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

// src/lib/helper/swagger/post/create-post-schema.ts
var create_post_schema_exports = {};
__export(create_post_schema_exports, {
  createPostSchema: () => createPostSchema
});
module.exports = __toCommonJS(create_post_schema_exports);
var createPostSchema = {
  summary: "Post creation",
  description: "This method includes a new post in the blog",
  tags: ["post"],
  security: [{ bearerAuth: [] }],
  body: {
    type: "object",
    required: ["title", "content", "teacher_id"],
    properties: {
      title: { type: "string" },
      content: { type: "string" },
      teacher_id: { type: "number" }
    }
  },
  response: {
    201: {
      description: "Successful response",
      type: "object",
      properties: {
        title: { type: "string" },
        content: { type: "string" },
        teacher_id: { type: "number" }
      }
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createPostSchema
});
