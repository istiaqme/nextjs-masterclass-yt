import Meta from '../../components/Meta';
const SingleNews = ({newsItem}) => {
    return ( 
        <>
            <Meta title={newsItem.title} keywords={newsItem.title} description={newsItem.body} />
            <main className='container mt-4'>
                <div className='row'>
                    <h1>{newsItem.title}</h1>
                    <p>
                        {newsItem.body}
                    </p>
                </div>
            </main>

        </>
     );
}

/* export const getServerSideProps = async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id);
    const newsItem = await res.json();
  
    return {
      props: {
        newsItem
      }
    }
} */

export const getStaticProps = async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id);
    const newsItem = await res.json();
  
    return {
      props: {
        newsItem
      }
    }
}


export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const newsList = await res.json();
    const ids = newsList.map((newsItem) => newsItem.id);
    const paths = ids.map((id) => ({params: {id: id.toString()}}))
    return {
        paths,
        fallback: false
    }
}

 
export default SingleNews;