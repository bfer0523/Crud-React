/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore'
import{ db } from '../firebaseConfig/firabase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from "@firebase/util"
const MySwal = withReactContent(Swal)

const Show = () => {

    //1 configuracion de hooks
    const [products,setProducts] = useState([])

    //2 referenciamos a la bd de firestore
    const productsCollection = collection(db, "products")

    //3 funcion para todos los docs
    const getProducts = async() =>{
        const data = await getDocs(productsCollection)
        //console.log(data.docs)
        setProducts(
            data.docs.map( (doc)=>({...doc.data(),id:doc.id}))
        )
        //console.log(products)
    }
    //4 funcion para eliminar un doc
        const deleteProduct =async(id)=>{
          const productDoc  = doc(db,"products",id)
          await deleteDoc(productDoc)
          getProducts()
        }
    //5 funcion de configuracion para sweetAlert2
        const confirmDelete =(id) =>{
            MySwal.fire({
                title: 'Deseas eliminar el producto?',
                text: "No podra revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!'
              }).then((result) => {
                if (result.isConfirmed) {
                    deleteProduct(id)
                    Swal.fire(
                    'eliminado!',
                    'Tu archivo a sido eliminado.'
                    
                  )
                }
              })
        }
    //6 usamos Hooks
        useEffect( ()=>{
            getProducts()
        })

    //7 devolvemos la vista de nuestros componentes
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="d-grid gap-2">
                    <Link className="btn btn-secondary mt-2 mb-2" to="/create" >Create</Link>
                </div>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map( (product)=>(
                            <tr key={product.id}>
                                <td>{product.description}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className="btn btn-light "><i className="fa-solid fa-pen-nib"></i></Link>
                                    <button onClick={()=>{confirmDelete(product.id)}} className="btn btn-danger "><i className="fa-solid fa-trash-can"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>



    </div>
  )
}

export default Show