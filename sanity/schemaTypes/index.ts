import type { SchemaTypeDefinition } from "sanity"

import { blockContentType } from "./blockContentType"
import { categoryType } from "./categoryType"
import { postType } from "./postType"
import { authorType } from "./authorType"
import jobListings from "./job-listings"
import { projectType } from "./projectType"
import { upcomingProjectType } from "./upcomingProjectType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, jobListings, projectType, upcomingProjectType],
}

