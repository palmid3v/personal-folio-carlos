// sanity.config.ts

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "sanity-nextjs-site",
  title: "Sanity Next.js Site",
  projectId: "vneklly6",
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});