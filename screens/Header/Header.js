export async function getServerSideProps(){
    const  title  = await fetch('http://localhost:3000/api/games')
      .then(res => {
        if(res.ok) return res.json()
      })
      .then(resObjPromise => resObjPromise)
      
      console.log(title);
      
    return {
      props:{
        title: title
      }
    }
  }


export default function Header(props){

    return(
        <main>
            <h1>HEADER</h1>
            <p>{props.title}</p>
        </main>
    )
}
