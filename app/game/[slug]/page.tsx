import Text from "@/components/Text";
interface Props {
  params: {
    slug: string;
  };
}

const GameSlug = async (props: Props) => {
  const { slug } = await props.params;
  return (
    <div>
      <Text>{slug}</Text>
    </div>
  );
};

export default GameSlug;
