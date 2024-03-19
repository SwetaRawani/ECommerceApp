import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../styles/ProductView.css"

function ProductView() {
  let [data, setdata] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/products`, data)
      .then((res) => {
        console.log(res.data.body);
        setdata(res.data.body)
      }).catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div className='productview'>
      {
        data.map((x) => {
          return (
            <div className='view'>
              <table>
                <tr>
                  <td>
                    Id:
                  </td>
                  <td>{x.id}</td>
                </tr>
                <tr>
                  <td>
                    Name:
                  </td>
                  <td>{x.name}</td>
                </tr>
                <tr>
                  <td>
                    Brand:
                  </td>
                  <td>{x.brand}</td>
                </tr>
                <tr>
                  <td>
                    Category:
                  </td>
                  <td>{x.category}</td>
        
                </tr>
                <tr>
                  <td>
                    Description:
                  </td>
                  <td>{x.description}</td>

                
                </tr>
                <tr>
                 <td>Cost:</td>
                  <td>{x.cost}</td>
                </tr>
                <tr>
                 <td>Image_Url:</td>
                  <td><img src={x.image_url} alt="" /></td>
                </tr>

              </table>
              
            </div>
          )
        })
      }
    </div>
  )
}
export default ProductView