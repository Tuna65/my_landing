import React from "react";
import Image from "next/image";
import Text from "@/components/Text";
import { Post } from "@/models";
import img from "@/assets/images/img.png";

interface Props {
  params: {
    slug: string;
  };
}

const getPostBySlug = async (slug: string): Promise<Post> => {
  return {
    id: 1,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    image: img,
    author: "Tracey Wilson",
    date: "2024-01-01",
    slug: slug,
  };
};

const BlogDetailPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto lg:py-8 py-0 xl:px-4 2xl:px-0 px-2">
      <div className="mb-4">
        <Text className="inline-block bg-blue-600 text-white px-4 py-1 rounded">
          {post.category}
        </Text>
      </div>

      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        {post.title}
      </h1>

      <div className="flex items-center gap-4 mb-8">
        <div className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
          <Text>By</Text>
          <Text>{post.author}</Text>
        </div>
        <Text className="text-gray-600 dark:text-gray-400">
          {formattedDate}
        </Text>
      </div>

      <div className="relative w-full h-[500px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <Text className="text-gray-600 dark:text-gray-400">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels.
        </Text>

        <Text className="text-gray-600 dark:text-gray-400 mt-4">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </Text>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-200">
          Research Your Destination
        </h2>

        <Text className="text-gray-600 dark:text-gray-400">
          Before embarking on your journey, take time to research your
          destination thoroughly. This includes understanding the local customs,
          climate, transportation options, and must-see attractions. Having this
          knowledge beforehand will help you plan your itinerary effectively and
          avoid any cultural faux pas.
        </Text>
      </div>
    </div>
  );
};

export default BlogDetailPage;
