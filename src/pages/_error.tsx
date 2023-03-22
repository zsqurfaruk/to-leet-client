import Error from 'next/error'

  export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const errorCode = res.ok ? false : res.status
    const json = await res.json()
  
    return {
      props: { errorCode, stars: json.stargazers_count },
    }
  }
  
  export default function Page({ errorCode, stars }:any) {
    if (errorCode) {
      return <Error statusCode={errorCode} />
    }
  
    return <div className='h-96 w-96 text-5xl'>Next stars: {stars}</div>
  }