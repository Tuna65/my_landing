import img from "@/assets/images/img.png";
import { Post } from "@/models";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Text from "@/components/Text";
import React from "react";

type Props = {};

const LastetPost = (props: Props) => {
  const posts: Post[] = new Array(12).fill({}).map((_, idx) => ({
    id: idx + 1,
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    author: "John Doe",
    date: new Date().toISOString(),
    image: img,
    slug: `post-${idx + 1}`,
  }));

  return (
    <div className="lg:mt-52 mt-14">
      <Text className="text-[18px] font-semibold mb-4">Latest Post</Text>
      <div className="grid grid-cols-12 lg:gap-3 gap-2 items-center justify-center">
        {posts.map((post) => {
          return <Card post={post} key={`card-${post.id}`} />;
        })}
      </div>
      <div className="flex justify-center lg:my-10 my-4">
        <Button type="default" size="large">
          View All Post
        </Button>
      </div>
    </div>
  );
};

export default React.memo(LastetPost);
