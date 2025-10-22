
import { type Post } from "../types/post"
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

type Props = {
  posts: Post[];
  onDelete: (id: number) => void;
};

export default function PostList({ posts, onDelete }: Props) {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Danh sách bài viết ({posts.length})</h1>
        <Link to="/create" className="btn">✏️ Viết bài mới</Link>
      </div>

      <div className="grid">
        {posts.map(p => <PostCard key={p.id} post={p} onDelete={onDelete} />)}
      </div>
    </div>
  );
}
