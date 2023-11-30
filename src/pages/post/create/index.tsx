import { useState } from "react";
import { api } from "~/utils/api";

export default function CreatePost () {

  const [title, setTitle] = useState('')
  const mutation = api.post.create.useMutation();

  const handleCreatePost = () => {
    mutation.mutate({
      name: title,
      content: 'okk'
    })
  }

  return (
    <div>
      <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">标题</label>
          <input value={title} onChange={e => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" />
      </div>
      {mutation.isLoading ? '创建中' : '已完成'}
      <button onClick={handleCreatePost}>Blue</button>
    </div>
  )
}