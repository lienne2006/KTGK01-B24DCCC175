import { type Post } from "./types/post";

export const samplePosts: Post[] = [
  {
    id: 1,
    title: "Khám phá công nghệ React 2025",
    author: "Nguyễn Linh",
    thumbnail: "https://picsum.photos/600/400?random=1",
    content: `React 2025 mang đến nhiều cải tiến...`.repeat(20),
    category: "Công nghệ",
    date: "2025-10-22",
    shortDesc: "Giới thiệu các tính năng mới trong React 2025",
  },
  {
    id: 2,
    title: "Ẩm thực đường phố Sài Gòn",
    author: "Trần Huy",
    thumbnail: "https://picsum.photos/600/400?random=2",
    content: `Ẩm thực đường phố là linh hồn...`.repeat(18),
    category: "Ẩm thực",
    date: "2025-10-20",
    shortDesc: "Hành trình ẩm thực không thể bỏ lỡ tại TP.HCM",
  },
];
