import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { sanityFetch } from "@/sanity/lib/client"
import { POST_SLUG_QUERY, POST_SLUGS_QUERY } from "@/sanity/lib/query"
import { PortableText, type PortableTextComponents } from "@portabletext/react"
import { format } from "date-fns"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slug = await sanityFetch({ query: POST_SLUGS_QUERY })
  const slugs = slug?.data as { slug: { current: string } }[]
  return slugs?.map((slug: { slug: { current: string } }) => ({
    slug: slug.slug.current,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const postItems = await sanityFetch({
    query: POST_SLUG_QUERY,
    params: { slug: params.slug },
  })

  console.log(postItems);



  const post = postItems?.data as {
    _id: string
    title: string
    mainImage: {
      asset: {
        url: string
      }
      alt: string
    }
    body: any[]
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
    slug: {
      current: string
    }
  }

  if (!post) {
    notFound()
  }

  const components: PortableTextComponents = {
    block: {
      h1: ({ value }) => <h1 className="text-4xl font-bold mt-8 mb-4">{value.children[0].text}</h1>,
      h2: ({ value }) => <h2 className="text-3xl font-bold mt-8 mb-4">{value.children[0].text}</h2>,
      h3: ({ value }) => <h3 className="text-2xl font-bold mt-6 mb-3">{value.children[0].text}</h3>,
      normal: ({ children }) => <p className="text-zinc-400 mb-4 leading-relaxed">{children}</p>,
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-zinc-400">{children}</ul>,
    },
    marks: {
      strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
    },
  }

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background z-10" />
        <Image
          src={post.mainImage.asset.url || "/placeholder.svg"}
          alt={post.mainImage.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container h-full flex flex-col justify-end pb-12">
          <Link href="/blog" className="text-white/80 hover:text-white flex items-center gap-2 mb-8 w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">{post.title}</h1>
          <div className="flex items-center gap-4 mt-6 text-white/80">
            <span>{post.author.name}</span>
            <span>•</span>
            <time>{format(new Date(post.publishedAt), "MMMM dd, yyyy")}</time>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-zinc">
            <PortableText value={post.body} components={components} />
          </div>
        </div>

        {/* Author Section */}
        <div className="max-w-3xl mx-auto mt-16 border-t border-zinc-800 pt-8">
          <div className="flex items-center gap-4">
            <Avatar className="border border-zinc-800">
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-white">Written by</div>
              <div className="text-zinc-400">{post.author.name}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

