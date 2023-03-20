import Home from "@components/pages/Home";
import { GET_ALL_PRODUCTS } from "src/graphql/query";
import client from "src/services/api";

export async function getServerSideProps(context: any) {

  console.log(process.env.NEXT_PUBLIC_FILE_SERVER)

  const allProducts = await client.query({
    query: GET_ALL_PRODUCTS,
    variables: {
      pagination: {}
    }
  })

  return {
    props: { allProducts }, // will be passed to the page component as props
  }
}

export default function Index(props: any) {


  return (
    <Home products={props.allProducts.data.getAllProducts.docs} />
  )
}