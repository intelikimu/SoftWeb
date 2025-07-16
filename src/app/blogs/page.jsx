import BlogContent from "@/components/blogs/BlogContent";
import BlogHero from "@/components/blogs/BlogHero";


export const metadata = {
  title: "TechWave | Blog",
  description: "Explore our latest articles on technology trends, insights, and innovations.",
};

export default function Blogs() {
  return (
    <>
      <BlogHero />
      <BlogContent />
    </>
  );
} 