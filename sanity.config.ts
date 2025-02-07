"use client";

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { structure } from "./sanity/structure";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
export default defineConfig({
  name: "default",
  title: "MCF",
  projectId:
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! ||
    process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: "mcfwebsitedata",
  basePath: "/studio",
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    deskTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    vercelDeployTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
