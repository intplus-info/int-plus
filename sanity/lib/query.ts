import { defineQuery } from "next-sanity";

export const JOB_LISTING_QUERY = defineQuery(`*[_type == "jobListing"] {
  _id,
  title,
  slug,
  location,
  salary,
  experience,
  skills,
  description,
  responsibilities,
  applicationDeadline,
  categories,
  applicationLink
}`);

export const POST_QUERY = defineQuery(`*[_type == "post"] {
  _id,
  title,
  slug { current },
  author-> { _id, name, image },
  mainImage { asset-> { url }, alt },
  categories[]-> { _id, title },
  publishedAt,
  body
}`);


export const POST_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    mainImage {
      asset->{
        url
      },
      alt
    },
    body,
    author->{
      _id,
      name
    },
    publishedAt,
    slug
  }
`

// For generating static paths
export const POST_SLUGS_QUERY = `
  *[_type == "post"] {
    slug {
      current
    }
  }
`



export const PROJECT_SHOWCASE_QUERY = defineQuery(`*[_type == "project"] {
  _id,
  title,
  img {
    asset-> {
      url
    },
    alt
  },
  categories,
  description,
  timeTaken,
  startDate,
  completionDate,
  methods,
  technologies
}`)

export const UPCOMING_PROJECTS_QUERY = defineQuery(`*[_type == "upcomingProject"] {
  _id,
  icon,
  title,
  category,
  completion,
  description
}`)

// For generating static paths for project pages if needed
export const PROJECT_SLUGS_QUERY = `
  *[_type == "project"] {
    slug {
      current
    }
  }
`

// For fetching a single project by slug
export const PROJECT_SLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    img {
      asset-> {
        url
      },
      alt
    },
    categories,
    description,
    timeTaken,
    startDate,
    completionDate,
    methods,
    technologies,
    slug
  }
`

