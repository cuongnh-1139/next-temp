import PostItem from './PostItem'

function HomePage({ posts }) {
  return (
    <div className="home-page">
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  )
}

export default HomePage