
import {  type Post } from "../types/post";
import { useNavigate } from "react-router-dom";

type Props = {
  post: Post;
  onDelete?: (id: number) => void;
};

export default function PostCard({ post, onDelete }: Props) {
  const navigate = useNavigate();
  return (
    <article className="card">
      <img src={post.thumbnail} alt={post.title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-desc">{post.shortDesc ?? post.content.slice(0, 100) + "..."}</p>
        <p className="card-meta">Tác giả: {post.author} • {post.date}</p>
        <div className="card-actions">
          <button onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
          <button onClick={() => navigate(`/posts/edit/${post.id}`)}>Chỉnh sửa</button>
          <button onClick={() => onDelete && onDelete(post.id)} className="danger">Xóa</button>
        </div>
      </div>
    </article>
  );
}
