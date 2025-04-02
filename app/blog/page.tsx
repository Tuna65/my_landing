import Advertisement from "./components/Advertisement";
import Banner from "./components/Banner";
import LastetPost from "./components/LastetPost";

const page = () => {
  return (
    <div className="xl:px-0 px-2 py-4">
      <Banner />
      <Advertisement />
      <LastetPost />
      <Advertisement />
    </div>
  );
};

export default page;
