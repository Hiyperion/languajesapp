export default function Post ({ params }:{params:{id:string}}) {
  const { id } = params
  return <h1>Esto es un post {id} </h1>
}
