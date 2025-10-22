
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { type Post } from "../types/Post";

type Props = {
  getPost: (id: number) => Post | undefined;
  updatePost: (id: number, data: Partial<Post>) => Post | undefined;
};

export default function PostEdit({ getPost, updatePost }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const nid = id ? parseInt(id, 10) : NaN;
  const post = getPost(nid);

  if (!post) return <div className="page"><p>Không tìm thấy bài viết</p></div>;

  const handleSubmit = (data: Omit<Post, "id" | "date">) => {
    updatePost(post.id, data);
    alert("Cập nhật thành công!");
    navigate(`/posts/${post.id}`);
  };

  return (
    <div className="page">
      <h1>Chỉnh sửa bài viết</h1>
      <PostForm initial={post} onSubmit={handleSubmit} onCancel={() => navigate(`/posts/${post.id}`)} submitLabel="Cập nhật" />
    </div>
  );
}
