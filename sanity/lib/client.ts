import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId } from "../env"
import type { QueryParams } from "sanity"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to always fetch fresh data
})

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: QueryParams
  tags?: string[]
}) {
  try {
    const result = await client.fetch<QueryResponse>(query, params, {
      cache: "no-store", // This ensures fresh data is always fetched
      next: { tags }, // This allows for tag-based revalidation if needed
    })
    return { data: result } // Wrap the result in a 'data' property to match the live version
  } catch (error) {
    console.error("Error fetching from Sanity:", error)
    throw error
  }
}

