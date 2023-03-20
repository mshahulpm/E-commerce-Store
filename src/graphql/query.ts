import { gql } from "@apollo/client";


export const GET_ALL_PRODUCTS = gql`
query($pagination: Pagination!){
  getAllProducts(Pagination: $pagination) {
    docs {
      images
      name
      price
      thumbnail
    }
    
  }
}
`