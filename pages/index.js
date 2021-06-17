import Home from '../screens/Home';


export async function getServerSideProps(){
  
  const { games,title } = await fetch('http://localhost:3000/api/games')
    .then(res => {
      if(res.ok) return res.json()
    })
    .then(resObjPromise => resObjPromise)

    
  return {
    props:{
      games,
      title
    }
  }
}

export default (Home);