import { Button } from "antd";
import Link from "next/link";

const PostsHomePage = () => {
  return (
    <div>
      <Button type="primary">
        <Link href="/">Home</Link>
      </Button>
      <h1>This is posts home page...</h1>
    </div>
  );
};

export default PostsHomePage;
