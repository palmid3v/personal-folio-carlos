// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "vneklly6",
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: false,
};

const client = createClient(config);

export default client;