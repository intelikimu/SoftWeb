export const categories = [
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    description: 'Latest developments and applications in AI technology',
    count: 8
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Modern web technologies and best practices',
    count: 6
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    description: 'Cloud infrastructure and services',
    count: 5
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Security trends and protection strategies',
    count: 4
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    description: 'Blockchain technology and applications',
    count: 3
  },
  {
    id: 'iot',
    name: 'IoT Solutions',
    description: 'Internet of Things and smart devices',
    count: 3
  }
];

export const tags = [
  { id: 'machine-learning', name: 'Machine Learning', count: 12 },
  { id: 'react', name: 'React', count: 8 },
  { id: 'nextjs', name: 'Next.js', count: 6 },
  { id: 'javascript', name: 'JavaScript', count: 10 },
  { id: 'python', name: 'Python', count: 7 },
  { id: 'aws', name: 'AWS', count: 6 },
  { id: 'docker', name: 'Docker', count: 5 },
  { id: 'security', name: 'Security', count: 8 },
  { id: 'api', name: 'API', count: 7 },
  { id: 'devops', name: 'DevOps', count: 6 },
  { id: 'blockchain', name: 'Blockchain', count: 5 },
  { id: 'smart-contracts', name: 'Smart Contracts', count: 4 },
  { id: 'iot', name: 'IoT', count: 4 },
  { id: 'ai', name: 'AI', count: 9 },
  { id: 'cloud', name: 'Cloud', count: 7 }
];

export const blogPosts = [
  {
    id: 1,
    title: 'How AI is Transforming Software Development',
    snippet: 'Discover how artificial intelligence is revolutionizing the way we develop software, from code generation to testing.',
    content: `
      <p class="mb-4">Artificial Intelligence (AI) is revolutionizing the software development industry in unprecedented ways. From automating routine coding tasks to enhancing testing procedures, AI tools are becoming indispensable for modern development teams.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Code Generation and Completion</h2>
      <p class="mb-4">AI-powered code generators like GitHub Copilot are changing how developers write code. These tools can suggest entire functions based on comments or function signatures, significantly speeding up the development process.</p>
      <p class="mb-4">For instance, a developer can write a comment describing a function&apos;s purpose, and the AI assistant will generate the implementation. This is particularly helpful for boilerplate code and common patterns.</p>
      
      <div class="bg-[#1a1a1a] border-l-4 border-blue-500 p-4 my-6">
        <p class="italic text-gray-300">"AI assistants are not replacing developers; they&apos;re augmenting their capabilities, allowing them to focus on more complex and creative aspects of software development."</p>
      </div>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Automated Testing</h2>
      <p class="mb-4">AI is also transforming how software is tested. Machine learning algorithms can analyze code changes and automatically generate tests that focus on potentially problematic areas.</p>
      <p class="mb-4">AI-driven testing tools can also predict which parts of an application are most likely to contain bugs based on historical data, allowing teams to allocate testing resources more effectively.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Predictive Analytics for Project Management</h2>
      <p class="mb-4">Project managers are leveraging AI to forecast project timelines and potential bottlenecks. By analyzing data from previous projects, these tools can provide more accurate estimates and highlight risks before they become issues.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Challenges and Considerations</h2>
      <p class="mb-4">Despite the benefits, integrating AI into software development workflows comes with challenges. Teams need to be aware of potential biases in AI models, security implications, and the importance of maintaining human oversight.</p>
      <p class="mb-4">Additionally, developers need to develop new skills to work effectively with AI tools, understanding their capabilities and limitations.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">As AI continues to evolve, its impact on software development will only grow. Organizations that effectively integrate these tools into their workflows will gain significant competitive advantages in terms of productivity, code quality, and innovation.</p>
    `,
    category: 'artificial-intelligence',
    tags: ['machine-learning', 'ai', 'devops', 'python'],
    image: '/blogs/ai-dev.jpg',
    author: {
      name: 'Sarah Johnson',
      image: '/team/sarah.jpg',
      role: 'AI Research Lead'
    },
    publishedAt: '2024-03-15',
    readTime: '5 min read',
    slug: 'how-ai-is-transforming-software-development'
  },
  {
    id: 2,
    title: 'Building Modern Web Apps with Next.js 14',
    snippet: 'Learn about the latest features in Next.js 14 and how to leverage them for building better web applications.',
    content: `
      <p class="mb-4">Next.js 14 brings significant improvements to the React framework, introducing new features that make web development more efficient and performant.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Server Components</h2>
      <p class="mb-4">Server Components represent a paradigm shift in how we build React applications. They allow components to be rendered on the server, reducing the JavaScript bundle size and improving initial page load.</p>
      
      <div class="bg-[#1a1a1a] border-l-4 border-blue-500 p-4 my-6">
        <p class="italic text-gray-300">"The introduction of Server Components in Next.js 14 marks a significant evolution in React-based web development."</p>
      </div>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Improved Data Fetching</h2>
      <p class="mb-4">Next.js 14 introduces enhanced data fetching capabilities, making it easier to implement server-side rendering and static site generation.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Performance Optimizations</h2>
      <p class="mb-4">The new version includes several performance improvements, including better tree shaking, optimized bundling, and enhanced caching strategies.</p>
    `,
    category: 'web-development',
    tags: ['react', 'nextjs', 'javascript'],
    image: '/blogs/nextjs.jpg',
    author: {
      name: 'Alex Chen',
      image: '/team/alex.jpg',
      role: 'Senior Frontend Developer'
    },
    publishedAt: '2024-03-10',
    readTime: '4 min read',
    slug: 'building-modern-web-apps-with-nextjs-14'
  },
  {
    id: 3,
    title: 'Cloud Security Best Practices for 2024',
    snippet: 'Essential security practices to protect your cloud infrastructure and applications in 2024.',
    content: `
      <p class="mb-4">As cloud adoption continues to grow, securing cloud infrastructure becomes increasingly critical. This guide covers essential security practices for 2024.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Identity and Access Management</h2>
      <p class="mb-4">Implementing robust IAM policies is crucial for maintaining security in cloud environments. Learn about best practices and common pitfalls.</p>
      
      <div class="bg-[#1a1a1a] border-l-4 border-blue-500 p-4 my-6">
        <p class="italic text-gray-300">"Security should be embedded into every aspect of your cloud infrastructure from the beginning."</p>
      </div>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Encryption and Key Management</h2>
      <p class="mb-4">Proper encryption and key management are fundamental to protecting sensitive data in the cloud.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Monitoring and Compliance</h2>
      <p class="mb-4">Continuous monitoring and compliance frameworks help ensure your cloud environment remains secure and meets regulatory requirements.</p>
    `,
    category: 'cybersecurity',
    tags: ['security', 'aws', 'devops'],
    image: '/blogs/security.jpg',
    author: {
      name: 'Maria Garcia',
      image: '/team/maria.jpg',
      role: 'Security Architect'
    },
    publishedAt: '2024-03-05',
    readTime: '6 min read',
    slug: 'cloud-security-best-practices-2024'
  },
  {
    id: 4,
    title: 'Smart Contract Development: Best Practices and Security',
    snippet: 'Learn the essential practices for developing secure and efficient smart contracts on blockchain platforms.',
    content: `
      <p class="mb-4">Smart contracts are the backbone of decentralized applications, but they come with unique security challenges. This guide covers best practices for developing secure smart contracts.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Security Considerations</h2>
      <p class="mb-4">Smart contracts are immutable once deployed, making security critical from the start. Common vulnerabilities include reentrancy attacks, integer overflow, and access control issues.</p>
      
      <div class="bg-[#1a1a1a] border-l-4 border-blue-500 p-4 my-6">
        <p class="italic text-gray-300">"Smart contract security is not optional—it's fundamental to the success of any blockchain application."</p>
      </div>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Testing and Auditing</h2>
      <p class="mb-4">Comprehensive testing and professional auditing are essential steps before deploying smart contracts to mainnet.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Gas Optimization</h2>
      <p class="mb-4">Efficient gas usage not only reduces costs but also improves the user experience of your dApp.</p>
    `,
    category: 'blockchain',
    tags: ['blockchain', 'smart-contracts', 'security'],
    image: '/blogs/smart-contracts.jpg',
    author: {
      name: 'David Kim',
      image: '/team/david.jpg',
      role: 'Blockchain Developer'
    },
    publishedAt: '2024-02-28',
    readTime: '7 min read',
    slug: 'smart-contract-development-best-practices'
  },
  {
    id: 5,
    title: 'IoT Security: Protecting Connected Devices',
    snippet: 'Explore the security challenges and solutions for Internet of Things devices in enterprise environments.',
    content: `
      <p class="mb-4">The Internet of Things (IoT) is expanding rapidly, but with this growth comes significant security challenges. This article explores how to secure IoT devices and networks.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Device Authentication</h2>
      <p class="mb-4">Proper device authentication is the first line of defense in IoT security. Learn about certificate-based authentication and secure key management.</p>
      
      <div class="bg-[#1a1a1a] border-l-4 border-blue-500 p-4 my-6">
        <p class="italic text-gray-300">"IoT security requires a multi-layered approach, from device level to network level to application level."</p>
      </div>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Network Security</h2>
      <p class="mb-4">Securing the network infrastructure that connects IoT devices is crucial for preventing unauthorized access and data breaches.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Data Protection</h2>
      <p class="mb-4">IoT devices generate vast amounts of data. Implementing proper encryption and data protection measures is essential.</p>
    `,
    category: 'iot',
    tags: ['iot', 'security', 'api'],
    image: '/blogs/iot-security.jpg',
    author: {
      name: 'Lisa Wang',
      image: '/team/lisa.jpg',
      role: 'IoT Security Specialist'
    },
    publishedAt: '2024-02-20',
    readTime: '5 min read',
    slug: 'iot-security-protecting-connected-devices'
  },
  {
    id: 6,
    title: 'Microservices Architecture: Design Patterns and Best Practices',
    snippet: 'Learn how to design and implement scalable microservices architectures for modern applications.',
    content: `
      <p class="mb-4">Microservices architecture has become the standard for building scalable, maintainable applications. This guide covers essential design patterns and best practices.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Service Decomposition</h2>
      <p class="mb-4">Proper service decomposition is crucial for microservices success. Learn how to identify service boundaries and design cohesive services.</p>
      
      <div class="bg-[#1a1a1a] border-l-4 border-blue-500 p-4 my-6">
        <p class="italic text-gray-300">"Microservices should be designed around business capabilities, not technical boundaries."</p>
      </div>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Communication Patterns</h2>
      <p class="mb-4">Understanding synchronous and asynchronous communication patterns is essential for building reliable microservices.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Data Management</h2>
      <p class="mb-4">Each microservice should own its data. Learn about database-per-service patterns and eventual consistency.</p>
    `,
    category: 'cloud-computing',
    tags: ['api', 'devops', 'docker'],
    image: '/blogs/microservices.jpg',
    author: {
      name: 'Michael Rodriguez',
      image: '/team/michael.jpg',
      role: 'Cloud Architect'
    },
    publishedAt: '2024-02-15',
    readTime: '8 min read',
    slug: 'microservices-architecture-design-patterns'
  },
  {
    id: 7,
    title: 'Machine Learning in Production: Deployment Strategies',
    snippet: 'Explore different strategies for deploying machine learning models in production environments.',
    content: `
      <p class="mb-4">Deploying machine learning models in production requires careful consideration of scalability, monitoring, and maintenance. This article covers essential deployment strategies.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Model Serving Patterns</h2>
      <p class="mb-4">Different serving patterns—batch, real-time, and streaming—have different requirements and trade-offs. Choose the right pattern for your use case.</p>
      
      <div class="bg-[#1a1a1a] border-l-4 border-blue-500 p-4 my-6">
        <p class="italic text-gray-300">"ML model deployment is not a one-time event but an ongoing process of monitoring and improvement."</p>
      </div>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Monitoring and Observability</h2>
      <p class="mb-4">ML models require specialized monitoring to track performance, data drift, and model degradation over time.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">A/B Testing and Canary Deployments</h2>
      <p class="mb-4">Gradual rollout strategies help minimize risk when deploying new ML models to production.</p>
    `,
    category: 'artificial-intelligence',
    tags: ['machine-learning', 'ai', 'devops', 'python'],
    image: '/blogs/ml-production.jpg',
    author: {
      name: 'Sarah Johnson',
      image: '/team/sarah.jpg',
      role: 'AI Research Lead'
    },
    publishedAt: '2024-02-10',
    readTime: '6 min read',
    slug: 'machine-learning-production-deployment-strategies'
  },
  {
    id: 8,
    title: 'Building Scalable APIs with Node.js and Express',
    snippet: 'Learn how to design and implement scalable REST APIs using Node.js and Express framework.',
    content: `
      <p class="mb-4">Node.js and Express provide a powerful foundation for building scalable APIs. This guide covers best practices for API design, performance, and security.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">API Design Principles</h2>
      <p class="mb-4">Good API design is crucial for developer experience and system maintainability. Learn about RESTful principles and API versioning strategies.</p>
      
      <div class="bg-[#1a1a1a] border-l-4 border-blue-500 p-4 my-6">
        <p class="italic text-gray-300">"APIs are the contracts between your frontend and backend—design them with care and foresight."</p>
      </div>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Performance Optimization</h2>
      <p class="mb-4">Implement caching, database optimization, and load balancing to ensure your APIs can handle high traffic.</p>
      
      <h2 class="text-2xl font-bold text-white mt-8 mb-4">Security Best Practices</h2>
      <p class="mb-4">Protect your APIs with proper authentication, authorization, input validation, and rate limiting.</p>
    `,
    category: 'web-development',
    tags: ['javascript', 'api', 'nodejs'],
    image: '/blogs/nodejs-api.jpg',
    author: {
      name: 'Alex Chen',
      image: '/team/alex.jpg',
      role: 'Senior Frontend Developer'
    },
    publishedAt: '2024-02-05',
    readTime: '5 min read',
    slug: 'building-scalable-apis-nodejs-express'
  }
];

export const getPostsByCategory = (categoryId) => {
  return blogPosts.filter(post => post.category === categoryId);
};

export const getPostsByTag = (tagId) => {
  return blogPosts.filter(post => post.tags.includes(tagId));
};

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const searchPosts = (query) => {
  const searchTerm = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.snippet.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm)
  );
}; 