// Generated by ts-to-zod
import { z } from "zod";

export const blogMetadataSchema = z.object({
  links: z.array(z.string()),
  atMentions: z.array(z.string()),
  hashTags: z.array(z.string()),
});

export const slugTypeSchema = z.union([
  z.literal("html"),
  z.literal("md"),
  z.literal("nm"),
]);

export const commentSchemaSchema = z.object({
  _id: z.string().optional(),
  blogId: z.string().max(40),
  createdAt: z.number(),
  author: z.string().max(40),
  authorGhId: z.number(),
  inReplyToUser: z.union([z.literal("default"), z.number()]),
  isAdmin: z.boolean(),
  hasMarkdown: z.boolean(),
  isVisible: z.boolean(),
  isDeleted: z.boolean(),
  inReplyToComment: z.string().max(40),
  body: z.string().max(500),
  html: z.string(),
  hadIllegalHtml: z.boolean(),
  lastUpdated: z.number(),
  deletedAt: z.number(),
  inReplyToUsername: z.string().max(40),
  authorAvatar: z.string(),
});

export const userSubmittedCommentSchemaSchema = commentSchemaSchema
  .omit({
    createdAt: true,
    author: true,
    authorGhId: true,
    isAdmin: true,
    isVisible: true,
    isDeleted: true,
    html: true,
    hadIllegalHtml: true,
    lastUpdated: true,
    deletedAt: true,
    authorAvatar: true,
  })
  .strict();

export const authSchema = z.object({
  username: z.string(),
  id: z.number(),
  avatar: z.string(),
});

export const githubUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  avatar_url: z.string(),
});

export const patchCommentSchema = commentSchemaSchema
  .pick({
    _id: true,
    body: true,
    html: true,
    hasMarkdown: true,
    hadIllegalHtml: true,
    lastUpdated: true,
  })
  .strict();