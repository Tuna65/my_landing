"use client";
import Image from "next/image";
import Text from "./Text";
import { useRouter } from "next/navigation";
import { Post } from "@/models";
import Button from "./Button";

type Props = { post: Post };

const Card = (props: Props) => {
  const { post } = props;
  const router = useRouter();

  const handleNavigate = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div
      key={`card-${post.id}`}
      className="xl:col-span-3 lg:col-span-4 sm:col-span-6 col-span-6"
      onClick={() => handleNavigate(post.slug)}
    >
      <div className="flex flex-col gap-4 border border-solid border-gray-200 dark:border-gray-600 p-2.5 rounded-md hover:shadow-lg effect transition-shadow cursor-pointer">
        <Image alt={post.title} src={post.image} className="w-full" />
        <div className="">
          <Button>{post.category}</Button>
        </div>
        <Text className="font-semibold lg:text-[18px] text-[14px] hover:underline">
          {post.title}
        </Text>
      </div>
    </div>
  );
};

export default Card;
