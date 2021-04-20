import React from "react";
import { useSelector } from "react-redux";
import { postsSelector } from "../redux/selectors";

const Page = ({ title }) => {
  const syncPosts = useSelector(postsSelector);
  return (
    <div className="page-wrapper">
      <div>{title}</div>
      {syncPosts.length ? (
        <div>
          <ul>
            {syncPosts.map((post) => (
              <div key={post.id}>{post.title}</div>
            ))}
          </ul>
        </div>
      ) : (
        <div>You have no posts</div>
      )}
    </div>
  );
};

export default Page;
