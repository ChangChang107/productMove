import React from 'react'
import { USER_DATA } from './userdata'
import { FiEdit, FiDelete, FiPlus} from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom'
import { Component } from 'react';
import axios from 'axios';

let reqInstance = axios.create({
  headers: {
    cookie : `token=${localStorage.getItem('token')}`
    }
})

export default class Users extends Component {

  constructor(props){
    super(props);
    this.state = {
      users : []
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
        users : res.data.payload.products
      })
    }).catch(err => {
      console.log(err)
    });
  }

  render() {

    return (
        <div className='mr-3 flex-1'>
          <Title/>
          <div className='mb-5' >
            <SearchForm />
          </div>
          <Table/>
        </div>
    )
  }
}

function Title(){
  return (
    <div className='flex items-center justify-between py-5 px-10'>
      <div>
        <h1 className='text-2xl font-semibold leading-relaxed text-gray-800'>Users</h1>
      </div>
      <Link to='/admin/create'>
        <button className='inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-green-500 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:bg-green-600 focus:ring-offset-1'>
          <FiPlus className='w-6 h-6 fill-current' />
          <span className='text-sm font-semibold tracking-wide'>Add User</span>
        </button>
      </Link>
    </div>
  )
}

function SearchForm(){
  return (
                <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white rounded-lg">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="grid grid-cols-2 gap-20 border border-gray-200 p-2 rounded">
                            <div className="flex border rounded bg-gray-300 items-center p-2 ">
                                <input type="text" placeholder="Enter name here..."
                                       className="bg-gray-300 w-full focus:outline-none text-gray-700"/>
                            </div>
                            <div className="flex border rounded bg-gray-300 items-center p-2 ">
                                <input type="text" placeholder="Enter user role here..."
                                       className="bg-gray-300 w-full focus:outline-none text-gray-700"/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex justify-center"><button className="p-2 border w-1/4 rounded-xl bg-green-500 text-white hover:bg-green-700 focus:outline-none  focus:bg-green-600 ">Search</button></div>
                </div>
  )
}

function Table(){
  return (
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
            Name
						</th>
						<th scope="col" className="px-6 py-3">
            UserRole
						</th>
						<th scope="col" className="px-6 py-3">
            Address
						</th>
						<th scope="col" className="px-6 py-3">
							<span className="sr-only">Edit</span>
						</th>
					</tr>
				</thead>
				<tbody>
        {USER_DATA.map(item => (
					<tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						
						<th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
							{item.name}
						</th>
						<td className="px-6 py-4">
            {item.userRole}
						</td>
						<td className="px-6 py-4">
            {item.address}
						</td>
						<td className="px-6 py-4 text-right">
							<Link to='/admin/users/edit' className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
						</td>
					</tr>
          ))}
				</tbody>
			</table>
  )
}


