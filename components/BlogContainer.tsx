"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { format } from "date-fns"
import { useState } from "react"

const categories = ["All", "Business", "Design", "Development"]

export interface Post {
  _id: string
  title: string
  mainImage: {
    asset: {
      url: string
    }
    alt: string
  }
  author: {
    _id: string
    name: string
    image: {
      _type: string
      asset: {
        _type: string
        _ref: string
      }
    }
  }
  categories: {
    _id: string
    title: string
  }[]
  publishedAt: string
  body: any[]
  slug: {
    current: string
  }
}

interface BlogContainerProps {
  posts: Post[]
}

export default function BlogContainer({ posts }: BlogContainerProps) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Get featured post (first post)
  const featuredPost = posts?.[0]

  // Filter remaining posts based on category
  const filteredPosts = posts?.slice(1).filter((post) => {
    if (selectedCategory === "All") return true
    return post.categories?.some((cat) => cat.title === selectedCategory) || false
  })

  return (
    <main className="min-h-screen container p-4 md:p-6 lg:p-8">
      {/* Category Filter */}
      <nav className="flex justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            className={cn(
              "rounded-full border border-zinc-800 hover:bg-zinc-800 hover:text-white",
              category === selectedCategory && "bg-zinc-800 text-white",
            )}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </nav>

      {/* Featured Post */}
      {featuredPost && (
        <section className="my-12">
          <div className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 p-6 border rounded-3xl bg-zinc-900/50 bg-[url('/bg-small.svg')]">
                <div className="relative aspect-[16/9] lg:aspect-auto rounded-2xl overflow-hidden">
                  <Image
                    src={featuredPost.mainImage.asset.url || "/placeholder.svg"}
                    alt={featuredPost.mainImage.alt}
                    fill
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">{featuredPost.title}</h1>
                <p className="text-muted-foreground">{featuredPost.body?.[1]?.children?.[0]?.text || "No excerpt available"}</p>
                <Button variant="link" asChild className="text-white p-0 hover:text-muted-foreground">
                  <Link href={`/blog/${featuredPost.slug.current}`}>Read More...</Link>
                </Button>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border px-8 py-8 rounded-2xl">
                  <div className="md:border-r px-2">
                    <div className="text-sm text-zinc-500">Author</div>
                    <div className="text-white">{featuredPost.author.name}</div>
                  </div>
                  <div className="border-r px-2">
                    <div className="text-sm text-muted-foreground">Published Date</div>
                    <div className="text-white">{format(new Date(featuredPost.publishedAt), "dd/MM/yyyy")}</div>
                  </div>
                  <div className="px-2">
                    <div className="text-sm text-muted-foreground">Category</div>
                    <div>
                      {featuredPost.categories.map((category) => (
                        <span key={category._id} className="">
                          {category.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <div className="grid xl:grid-cols-2 gap-12">
        {filteredPosts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </main>
  )
}

interface BlogCardProps {
  post: Post
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="overflow-hidden">
      <div>
        <div className="border p-6 bg-zinc-900 rounded-3xl bg-[url('/bg-small.svg')]">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-800">
            <Link href={`/blog/${post.slug.current}`} className="absolute w-full h-full bg-transparent z-20"></Link>
            <Image
              src={post.mainImage.asset.url || "/placeholder.svg"}
              alt={post.mainImage.alt}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="space-y-4 mt-6">
          <div className="flex items-center gap-4">
            <Avatar className="border border-zinc-800">
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium text-white">{post.author.name}</div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{format(new Date(post.publishedAt), "dd/MM/yyyy")}</span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">{post.title}</h2>
            <p className="text-muted-foreground text-sm">{post.body?.[1]?.children?.[0]?.text || "No excerpt available"}</p>
          </div>
          <Button variant="link" asChild className="text-white p-0 hover:text-muted-foreground">
            <Link href={`/blog/${post.slug.current}`}>Read More</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

