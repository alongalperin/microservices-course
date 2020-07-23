import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = useCallback(async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setPosts(res.data);
  }, [setPosts]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id} />
          <CommentList postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderPosts}
    </div>
  );
};
