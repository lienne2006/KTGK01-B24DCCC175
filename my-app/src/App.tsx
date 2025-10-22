import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./pages/PostList";
import PostCreate from "./pages/PostCreate";
import PostDetail from "./pages/PostDetail";
import PostEdit from "./pages/PostEdit";
import { type Post } from "./types/post";
import { samplePosts } from "./data";

export default function App() {
  const [posts, setPosts] = useState<Post[]>(samplePosts);

  const createPost = (data: Omit<Post, "id" | "date">) => {
    const newPost: Post = {
      ...data,
      id: Date.now(),
      date: new Date().toISOString().slice(0,10),
    };
    setPosts(prev => [newPost, ...prev]);
    return newPost;
  };

  const updatePost = (id: number, data: Partial<Post>) => {
    let updated: Post | undefined;
    setPosts(prev => prev.map(p => {
      if (p.id === id) {
        updated = { ...p, ...data };
        return updated;
      }
      return p;
    }));
    return updated;
  };

  const deletePost = (id: number) => setPosts(prev => prev.filter(p => p.id !== id));
  const getPost = (id: number) => posts.find(p => p.id === id);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<PostList posts={posts} onDelete={(id)=>{ if(confirm("Bạn có chắc muốn xóa?")) { deletePost(id); alert("Xóa thành công"); } }} />} />
          <Route path="/create" element={<PostCreate createPost={createPost} />} />
          <Route path="/posts/:id" element={<PostDetail getPost={getPost} deletePost={deletePost} />} />
          <Route path="/posts/edit/:id" element={<PostEdit getPost={getPost} updatePost={updatePost} />} />
        </Routes>
      </main>
    </>
  );
}
