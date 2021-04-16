import Link from "next/link"

export default function PostCard({ post }) {
  return (
    <Link href={"/posts/" + post.category + "/" + post.slug}>
      <a className="block hover:bg-purple-100 p-2">
        <h3 className="text-purple-800 text-xl font-bold">{post.title}</h3>
        <time className="text-sm">{new Date(post.date).toDateString() + ""}</time>
      </a>
    </Link>
  )
}
