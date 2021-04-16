export default function Posts({ slug }) {
  return (
    <div>
      <h3>Posts</h3>
    </div>
  )
}
export async function getStaticProps({ params }) {
  
  return {
    props: {},
  }
}