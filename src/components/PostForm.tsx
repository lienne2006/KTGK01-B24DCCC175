import { Post } from '../types';
import { useState } from 'react';

interface Props {
  initialData?: Post;
  onSubmit: (post: Post) => void;
}

const categories = ["Công nghệ", "Du lịch", "Ẩm thực", "Đời sống", "Khác"];

const PostForm = ({ initialData, onSubmit }: Props) => {
  const [form, setForm] = useState<Post>(initialData || {
    id: Date.now(),
    title: '',
    author: '',
    thumbnail: '',
    content: '',
    category: categories[0],
    date: new Date().toLocaleDateString()
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.title.length < 10 || form.author.length < 3 || form.content.length < 50) {
      alert("Vui lòng nhập đúng yêu cầu!");
      return;
    }
    onSubmit(form);
  };

  return (
    <div>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Tiêu đề" />
      <input name="author" value={form.author} onChange={handleChange} placeholder="Tác giả" />
      <input name="thumbnail" value={form.thumbnail} onChange={handleChange} placeholder="URL ảnh" />
      <textarea name="content" value={form.content} onChange={handleChange} rows={10} />
      <select name="category" value={form.category} onChange={handleChange}>
        {categories.map(c => <option key={c}>{c}</option>)}
      </select>
      <button onClick={handleSubmit}>Đăng bài</button>
    </div>
  );
};

export default PostForm;
