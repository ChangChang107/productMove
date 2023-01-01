import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

let reqInstance = axios.create({
  headers: {
    cookie : `token=${localStorage.getItem('token')}`
    }
})
export default class AdminProducts extends Component {

  constructor(props){
    super(props);
    this.state = {
      products : []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:8000/admin/products', {
      withCredentials:true,
      headers:{
        authorization: `${localStorage.getItem('token')}`
      }
    }).then(res => {
      this.setState({
        products : res.data.payload.products
      })
    }).catch(err => {
      console.log(err)
    });
  }


  render() {

    var products = this.state.products;

  return (
    <main className='flex-1'>
      <div className='mr-3'>
        <div className='flex items-center justify-between py-5 px-10'>
          <div>
            <h1 className='text-2xl font-semibold leading-relaxed text-gray-800'>Products</h1>
          </div>
        </div>
        <div className='mb-5' >
          <div class="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white rounded-lg">
            <form>   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
              <div class="relative">
                  <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-green-300 focus:ring-blue-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search name" required/>
                  <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
              </div>
            </form>
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Type</th>
              <th scope="col" className="px-6 py-3">Color</th>
              <th scope="col" className="px-6 py-3">Weight</th>
              <th scope="col" className="px-6 py-3">Height</th>
              <th scope="col" className="px-6 py-3">Expiry</th>
              <th scope="col" className="px-6 py-3">Quantity</th>
              {/* <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th> */}
            </tr>
          </thead>
				<tbody>
        {products.map(item => (
					<tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{item.name}</td>
            <td className="px-6 py-4">{item.type}</td>
            <td className="px-6 py-4">{item.color}</td>
            <td className="px-6 py-4">{item.weight}</td>
            <td className="px-6 py-4">{item.height}</td>
            <td className="px-6 py-4">{item.expiry}</td>
            <td className="px-6 py-4">{item.amount}</td>
						{/* <td className="px-6 py-4 text-right">
							<Link to='/admin/products/edit' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
						</td> */}
					</tr>
          ))}
				</tbody>
			  </table>
      </div>
    </main>
  )
  }
}



