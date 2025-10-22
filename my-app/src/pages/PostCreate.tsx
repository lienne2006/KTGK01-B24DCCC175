import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import {  type Post } from "../types/post";

type Props = {
  createPost: (data: Omit<Post, "id" | "date">) => Post;
};

export default function PostCreate({ createPost }: Props) {
  const navigate = useNavigate();

  const handleSubmit = (data: Omit<Post, "id" | "date">) => {
    createPost(data);
    alert("Đăng bài thành công!");
    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Tạo bài viết mới</h2>
      <PostForm onSubmit={handleSubmit} onCancel={() => navigate("/")} />
    </div>
  );
}
