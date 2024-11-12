interface Post {
  slug: string;
  title: string;
  date: string;
  image?: string;
  excerpt: string;
  content: string;
}

// This is a simple in-memory store. In a real app, you'd fetch from a database or CMS
const posts: Post[] = [
  {
    slug: 'getting-started',
    title: 'Getting Started with Next.js',
    date: 'April 1, 2024',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    excerpt: 'Learn how to build modern web applications with Next.js',
    content: `
      <h2>Introduction to Next.js</h2>
      <p>Next.js is a powerful React framework that makes building full-stack web applications a breeze. With its built-in features like server-side rendering, static site generation, and API routes, Next.js provides everything you need to create production-ready applications.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Server-side rendering (SSR)</li>
        <li>Static site generation (SSG)</li>
        <li>API routes</li>
        <li>File-system based routing</li>
        <li>Built-in CSS and Sass support</li>
      </ul>

      <h3>Getting Started</h3>
      <p>To create a new Next.js project, you can use the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>

      <p>This will set up a new Next.js project with all the necessary dependencies and configuration files.</p>
    `,
  },
  {
    slug: 'mastering-typescript',
    title: 'Mastering TypeScript',
    date: 'March 28, 2024',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    excerpt: 'Essential TypeScript concepts every developer should know',
    content: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds static typing to JavaScript, making it easier to write and maintain large applications. It catches errors early in development and provides better tooling support.</p>

      <h3>Key Concepts</h3>
      <ul>
        <li>Type annotations</li>
        <li>Interfaces</li>
        <li>Generics</li>
        <li>Union types</li>
        <li>Type inference</li>
      </ul>

      <h3>Example</h3>
      <pre><code>interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {
  // Implementation
}</code></pre>

      <p>TypeScript makes your code more reliable and easier to refactor.</p>
    `,
  },
  {
    slug: 'web-performance',
    title: 'Web Performance Optimization',
    date: 'March 25, 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    excerpt: 'Tips and tricks to make your web applications faster',
    content: `
      <h2>Optimizing Web Performance</h2>
      <p>Performance is crucial for providing a good user experience and improving conversion rates. A fast website not only keeps users engaged but also positively impacts search engine rankings. Here are some key areas to focus on:</p>
      
      <h3>Key Optimization Areas</h3>
      <ul>
        <li><strong>Image Optimization:</strong> Compress images without losing quality, use modern formats like WebP, and implement responsive images to serve the appropriate size based on the user's device.</li>
        <li><strong>Code Splitting:</strong> Break down your JavaScript bundles into smaller chunks that can be loaded on demand, reducing the initial load time.</li>
        <li><strong>Lazy Loading:</strong> Defer the loading of non-critical resources, such as images and videos, until they are needed. This can significantly improve the initial load time.</li>
        <li><strong>Caching Strategies:</strong> Use browser caching and server-side caching to store frequently accessed resources, reducing the need to fetch them from the server repeatedly.</li>
        <li><strong>Resource Minification:</strong> Minify CSS, JavaScript, and HTML files to reduce their size and improve load times. Tools like UglifyJS and CSSNano can help with this.</li>
      </ul>
      
      <h3>Best Practices</h3>
      <p>Always measure performance before and after optimization to ensure that your changes have the desired effect. Here are some best practices to follow:</p>
      <ul>
        <li><strong>Use Lighthouse for Auditing:</strong> Lighthouse is an open-source tool from Google that provides insights into your website's performance, accessibility, and SEO. Use it to identify areas for improvement.</li>
        <li><strong>Monitor Core Web Vitals:</strong> Core Web Vitals are a set of metrics that measure the user experience of your site, focusing on loading, interactivity, and visual stability. Tools like Google Search Console and PageSpeed Insights can help you monitor these metrics.</li>
        <li><strong>Implement Performance Budgets:</strong> Set performance budgets to ensure that your site remains fast as you add new features. This involves setting limits on metrics like load time, number of requests, and total page size.</li>
        <li><strong>Optimize Critical Rendering Path:</strong> The critical rendering path is the sequence of steps the browser takes to render a page. Optimize it by minimizing render-blocking resources, inlining critical CSS, and deferring non-critical JavaScript.</li>
      </ul>
      
      <h3>Additional Optimization Techniques</h3>
      <ul>
        <li><strong>Use a Content Delivery Network (CDN):</strong> CDNs distribute your content across multiple servers worldwide, reducing latency and improving load times for users regardless of their location.</li>
        <li><strong>Enable HTTP/2:</strong> HTTP/2 allows multiple requests to be sent over a single connection, reducing latency and improving load times. Ensure your server supports HTTP/2.</li>
        <li><strong>Reduce Server Response Time:</strong> Optimize your server configuration, use efficient database queries, and implement server-side caching to reduce the time it takes for your server to respond to requests.</li>
        <li><strong>Preload Key Resources:</strong> Use the <code>&lt;link rel="preload"&gt;</code> tag to preload critical resources, such as fonts and key scripts, to ensure they are available as soon as they are needed.</li>
        <li><strong>Optimize Fonts:</strong> Use modern font formats like WOFF2, limit the number of font variations, and use font-display: swap to ensure text remains visible during font loading.</li>
      </ul>
      
      <p>Remember: Performance is not just about making your site fast, it's about making it feel fast. By focusing on these optimization techniques and best practices, you can create a smooth and responsive user experience that keeps visitors engaged and coming back for more.</p>
    `,
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

// Helper function to add a new post
export function addPost(post: Post) {
  posts.push(post);
}