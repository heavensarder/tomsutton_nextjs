'use client';

import { use, useState, useEffect } from 'react';
import PostEditor from '../components/PostEditor';

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const postId = unwrappedParams.id;
  
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(`/api/admin/blog/${postId}`)
      .then(res => res.json())
      .then(json => {
        if (json.success) setData(json.post);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [postId]);

  if (loading) {
    return <div className="p-12 text-center text-slate-400 font-bold animate-pulse">Loading post data...</div>;
  }

  if (!data) {
    return <div className="p-12 text-center text-red-500 font-bold">Post not found.</div>;
  }

  return <PostEditor initialData={data} />;
}
