import {getAllPosts, getPostBySlug} from '@/lib/blog';
import {notFound} from 'next/navigation';
import {Metadata} from 'next';
import MyDropdown from "@/components/my-dropdown";
import React from "react";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({params}: { params: { slug: string } }): Promise<Metadata> {
    const post = getPostBySlug(params.slug);
    if (!post) return {title: 'Post Not Found'};

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default function BlogPost({params}: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
            <MyDropdown/>

            <article className="container max-w-3xl py-8 animate-in fade-in duration-500">
                {post.image && (
                    <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter">{post.title}</h1>
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                    <div className="prose dark:prose-invert max-w-none">
                        <div dangerouslySetInnerHTML={{__html: post.content}}/>
                    </div>
                </div>
            </article>
        </div>
    );
}