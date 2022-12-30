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
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                    <div class="flex border rounded bg-gray-300 items-center p-2 ">
                        <input type="text" placeholder="Enter name here..."
                              class="bg-gray-300 w-full focus:outline-none text-gray-700"/>
                    </div>
                    <div class="flex border rounded bg-gray-300 items-center p-2 ">
                        <input type="text" placeholder="Enter type here..."
                              class="bg-gray-300 w-full focus:outline-none text-gray-700"/>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                    <div class="flex border rounded bg-gray-300 items-center p-2 ">
                        <input type="text" placeholder="Enter expiry here..."
                              class="bg-gray-300 w-full focus:outline-none text-gray-700"/>
                    </div>
                    <div class="flex border rounded bg-gray-300 items-center p-2 ">
                        <input type="text" placeholder="Enter status here..."
                              class="bg-gray-300 w-full focus:outline-none text-gray-700"/>
                    </div>
                </div>
            </div>
            <div class="flex justify-center"><button class="p-2 border w-1/4 rounded-xl bg-green-500 text-white hover:bg-green-700 focus:outline-none  focus:bg-green-600 ">Search</button></div>
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
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
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
						<td className="px-6 py-4 text-right">
							<Link to='/admin/products/edit' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
						</td>
					</tr>
          ))}
				</tbody>
			  </table>
      </div>
    </main>
  )
  }
}



