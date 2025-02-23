import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const categories = ['All', 'Business', 'Design', 'Development'];

const blogPosts = [
  {
    id: 1,
    title: 'Web Design Trends Shaping 2023',
    excerpt:
      'Stay ahead of the design curve with insights into the latest web design trends. From immersive user experiences to bold color choices, explore the design elements that will dominate the digital landscape in 2023 and beyond.',
    image: '/images/blog-1.jpg',
    author: {
      name: 'Laura Turner',
      image: '/placeholder.svg',
    },
    readTime: '6 min read',
    date: '15/01/2023',
    category: 'Design',
  },
  {
    id: 2,
    title: 'The Art of User-Centric Design',
    excerpt:
      'User-centric design is the key to creating intuitive and engaging digital experiences. Dive into the principles and practices that put the user at the heart of every design decision.',
    image: '/images/blog-1.jpg',
    author: {
      name: 'Daniel Lee',
      image: '/placeholder.svg',
    },
    readTime: '5 min read',
    date: '22/02/2023',
    category: 'Design',
  },
  {
    id: 3,
    title: 'Optimizing Mobile User Experience for Higher Conversions',
    excerpt:
      'Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Learn strategies to enhance your mobile UX and drive better results.',
    image: '/images/blog-1.jpg',
    author: {
      name: 'Amanda Turner',
      image: '/placeholder.svg',
    },
    readTime: '7 min read',
    date: '10/03/2023',
    category: 'Development',
  },
  {
    id: 4,
    title: 'The Future of E-commerce: AI and Personalization',
    excerpt:
      'Artificial Intelligence is revolutionizing online shopping experiences. Explore how AI-driven personalization is shaping the future of e-commerce and boosting customer engagement.',
    image: '/images/blog-1.jpg',
    author: {
      name: 'Michael Chen',
      image: '/placeholder.svg',
    },
    readTime: '8 min read',
    date: '05/04/2023',
    category: 'Business',
  },
  {
    id: 5,
    title: 'The Future of E-commerce: AI and Personalization',
    excerpt:
      'Artificial Intelligence is revolutionizing online shopping experiences. Explore how AI-driven personalization is shaping the future of e-commerce and boosting customer engagement.',
    image: '/images/blog-1.jpg',
    author: {
      name: 'Michael Chen',
      image: '/placeholder.svg',
    },
    readTime: '8 min read',
    date: '05/04/2023',
    category: 'Business',
  },
];

export default function BlogContainer() {
  return (
    <main className="min-h-screen container p-4 md:p-6 lg:p-8">
      {/* Category Filter */}
      <nav className="flex justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            className={cn(
              'rounded-full border border-zinc-800 hover:bg-zinc-800 hover:text-white',
              category === 'Design' && 'bg-zinc-800 text-white'
            )}
          >
            {category}
          </Button>
        ))}
      </nav>

      {/* Featured Post */}
      <section className="my-12">
        <div className="overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="grid grid-cols-1 p-6 border rounded-3xl  bg-zinc-900/50 bg-[url('/bg-small.svg')]">
              <div className="relative aspect-[16/9] lg:aspect-auto rounded-2xl overflow-hidden">
                <Image
                  src={blogPosts[0].image || '/placeholder.svg'}
                  alt={blogPosts[0].title}
                  fill
                  className="rounded-2xl object-cover"
                  priority
                />
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">{blogPosts[0].title}</h1>
              <p className="text-zinc-400">{blogPosts[0].excerpt}</p>
              <Button variant="link" className="text-white p-0 hover:text-zinc-400">
                Read More...
              </Button>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border px-8 py-8 rounded-2xl">
                <div className="border-r px-2">
                  <div className="text-sm text-zinc-500">Read Time</div>
                  <div className=" text-white">{blogPosts[0].readTime}</div>
                </div>
                <div className="md:border-r px-2">
                  <div className="text-sm text-zinc-500">Author</div>
                  <div className=" text-white">{blogPosts[0].author.name}</div>
                </div>
                <div className="border-r px-2">
                  <div className="text-sm text-zinc-500">Published Date</div>
                  <div className=" text-white">{blogPosts[0].date}</div>
                </div>
                <div className=" px-2">
                  <div className="text-sm text-zinc-500">Category</div>
                  <div className=" text-white">{blogPosts[0].category}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <div className="grid xl:grid-cols-2 gap-12">
        {blogPosts.slice(1).map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
            author={post.author}
            readTime={post.readTime}
            date={post.date}
          />
        ))}
      </div>
    </main>
  );
}

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    image: string;
  };
  readTime: string;
  date: string;
}

function BlogCard({ title, excerpt, image, author, readTime, date }: BlogCardProps) {
  return (
    <article className=" overflow-hidden">
      <div className="">
        <div className="border p-6 bg-zinc-900 rounded-3xl bg-[url('/bg-small.svg')]">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-800">
            <Image
              src={image || '/placeholder.svg'}
              alt={title}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="space-y-4 mt-6">
          <div className="flex items-center gap-4">
            <Avatar className="border border-zinc-800">
              <AvatarImage src={author.image} alt={author.name} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium text-white">{author.name}</div>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span>{readTime}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
            <p className="text-zinc-400">{excerpt}</p>
          </div>
          <Button variant="link" className="text-white p-0 hover:text-zinc-400">
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
}
