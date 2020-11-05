import PostItem from './PostItem'

function HomePage({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  )
}

export default HomePage