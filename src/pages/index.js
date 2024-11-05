import Posts from "@/Components/Posts";
import SideBar from "@/Components/SideBar";
import TopBar from "@/Components/TopBar";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};
export default HomePage;
