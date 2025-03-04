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