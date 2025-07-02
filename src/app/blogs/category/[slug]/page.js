import Link from 'next/link';
import BlogList from '@/components/blogs/BlogList';
import BlogSearch from '@/components/blogs/BlogSearch';
import BlogCategories from '@/components/blogs/BlogCategories';

export async function generateMetadata({ params }) {
  const { slug } = params;
  
  // Format the category name for display
  const categoryName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `${categoryName} Articles | TechWave Blog`,
    description: `Explore our latest articles about ${categoryName.toLowerCase()} - trends, insights, and expert opinions.`,
  };
}

export default function CategoryPage({ params }) {
  const { slug } = params;
  
  // Format the category name for display
  const categoryName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return (
    <>
      <div className="bg-[#121212] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/blogs"
              className="inline-flex items-center text-gray-400 hover:text-blue-400 mb-6 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to All Articles
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {categoryName}
            </h1>
            
            <div className="h-1 w-20 bg-blue-500 mx-auto mb-8"></div>
            
            <p className="text-xl text-gray-300">
              Explore our latest articles about {categoryName.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <BlogSearch />
            <BlogList />
          </div>
          <aside className="lg:w-1/4">
            <BlogCategories />
          </aside>
        </div>
      </div>
    </>
  );
} 