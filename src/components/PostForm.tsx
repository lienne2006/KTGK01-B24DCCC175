import React, { useState, useEffect } from "react";
import { type Post } from "../types/post";

type Props = {
  initial?: Partial<Post>;
  onCancel?: () => void;
  onSubmit: (data: Omit<Post, "id" | "date">) => void;
  submitLabel?: string;
};

const categories = ["Công nghệ", "Du lịch", "Ẩm thực", "Đời sống", "Khác"];

export default function PostForm({ initial, onCancel, onSubmit, submitLabel = "Đăng bài" }: Props) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    thumbnail: "",
    content: "",
    category: categories[0],
    shortDesc: "",
  });
  const [errors, setErrors] = useState<Record<string,string>>({});

  useEffect(() => {
    if (initial) {
      setForm({
        title: initial.title ?? "",
        author: initial.author ?? "",
        thumbnail: initial.thumbnail ?? "",
        content: initial.content ?? "",
        category: initial.category ?? categories[0],
        shortDesc: initial.shortDesc ?? "",
      });
    }
  }, [initial]);

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.title || form.title.trim().length < 10) e.title = "Tiêu đề bắt buộc, ít nhất 10 ký tự";
    if (!form.author || form.author.trim().length < 3) e.author = "Tác giả bắt buộc, ít nhất 3 ký tự";
    if (!form.content || form.content.trim().length < 50) e.content = "Nội dung bắt buộc, ít nhất 50 ký tự";
    if (!form.thumbnail) e.thumbnail = "URL ảnh thumbnail bắt buộc";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handle = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validate()) return;
    onSubmit({
      title: form.title.trim(),
      author: form.author.trim(),
      thumbnail: form.thumbnail.trim(),
      content: form.content.trim(),
      category: form.category,
      shortDesc: form.shortDesc.trim() || form.content.slice(0,100),
    });
  };

  return (
    <form onSubmit={submit} className="form">
      <label>Tiêu đề
        <input value={form.title} onChange={e => handle("title", e.target.value)} />
        {errors.title && <div className="err">{errors.title}</div>}
      </label>

      <label>Tác giả
        <input value={form.author} onChange={e => handle("author", e.target.value)} />
        {errors.author && <div className="err">{errors.author}</div>}
      </label>

      <label>URL ảnh thumbnail
        <input value={form.thumbnail} onChange={e => handle("thumbnail", e.target.value)} />
        {errors.thumbnail && <div className="err">{errors.thumbnail}</div>}
      </label>

      <label>Thể loại
        <select value={form.category} onChange={e => handle("category", e.target.value)}>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </label>

      <label>Mô tả ngắn (tùy chọn)
        <input value={form.shortDesc} onChange={e => handle("shortDesc", e.target.value)} />
      </label>

      <label>Nội dung (ít nhất 10 dòng)
        <textarea rows={10} value={form.content} onChange={e => handle("content", e.target.value)} />
        {errors.content && <div className="err">{errors.content}</div>}
      </label>

      <div className="form-actions">
        <button type="submit">{submitLabel}</button>
        <button type="button" onClick={() => onCancel && onCancel()}>Hủy</button>
      </div>
    </form>
  );
}
