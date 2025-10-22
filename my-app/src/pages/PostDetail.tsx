
import { useParams, useNavigate } from "react-router-dom";
import { type Post } from "../types/post";

type Props = {
  getPost: (id: number) => Post | undefined;
  deletePost: (id: number) => void;
};

export default function PostDetail({ getPost, deletePost }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const nid = id ? parseInt(id, 10) : NaN;
  const post = getPost(nid);

  if (!post) return <div className="page"><p>Không tìm thấy bài viết</p></div>;

  const handleDelete = () => {
    if (confirm("Bạn có chắc muốn xóa bài này?")) {
      deletePost(post.id);
      alert("Xóa thành công!");
      navigate("/");
    }
  };

  return (
    <div className="page">
      <button className="btn-ghost" onClick={() => navigate(-1)}>← Quay lại</button>
      <h1>{post.title}</h1>
      <p className="card-meta">{post.author} • {post.date} • {post.category}</p>
      <img src={post.thumbnail} alt={post.title} style={{ width: "100%", maxHeight: 420, objectFit: "cover", borderRadius: 8 }} />
      <div style={{ whiteSpace: "pre-wrap", marginTop: 16 }}>{post.content}</div>
      <div style={{ marginTop: 12 }}>
        <button onClick={() => navigate(`/posts/edit/${post.id}`)}>Chỉnh sửa</button>
        <button onClick={handleDelete} className="danger">Xóa bài viết</button>
      </div>
    </div>
  );
}
