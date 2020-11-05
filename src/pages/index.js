import HomePage from 'containers/HomePage'
import { request } from 'utils/request'

function Page(props) {
  return <HomePage {...props} />
}

export async function getServerSideProps(context) {
  const { data: posts } = await request.get('https://jsonplaceholder.typicode.com/posts/')
  return {
    props: { posts }, // will be passed to the page component as props
  }
}

export default Page