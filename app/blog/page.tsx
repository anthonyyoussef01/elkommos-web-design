import Link from 'next/link';
import {Card} from '@/components/ui/card';
import {getAllPosts} from '@/lib/blog';
import MyDropdown from "@/components/my-dropdown";
import React from "react";

export default function Home() {
    const posts = getAllPosts();

    return (
        <div className="flex min-h-screen flex-col items-center overflow-x-hidden container">
            <MyDropdown/>

            <div className="space-y-4 py-4">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter">Welcome to EY Web & App Development Blog</h1>
                    <p className="text-muted-foreground">
                        Exploring ideas, sharing knowledge, and documenting the journey.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="transform transition-all duration-300 hover:scale-[1.02]"
                        >
                            <Card className="h-full overflow-hidden">
                                <div className="aspect-video relative bg-muted">
                                    {post.image && (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="object-cover w-full h-full"
                                        />
                                    )}
                                </div>
                                <div className="p-4 space-y-2">
                                    <h2 className="text-xl font-bold">{post.title}</h2>
                                    <p className="text-sm text-muted-foreground">{post.date}</p>
                                    <p className="line-clamp-2 text-muted-foreground">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}