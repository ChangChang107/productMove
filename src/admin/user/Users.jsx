import React from 'react'
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
    axios.get('http://localhost:8000/admin/users', {
      withCredentials:true,
      headers:{
        authorization: `${localStorage.getItem('token')}`
      }
    }).then(res => {
      this.setState({
        users : res.data.payload
      })
    }).catch(err => {
      console.log(err)
    });
  }

  render() {

    var users = this.state.users;

    return (
        <div className='mr-3 flex-1'>
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
          <div className='mb-5' >
          <div class="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white rounded-lg">
            <form>   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
              <div class="relative">
                  <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-green-300 focus:ring-blue-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search role" required/>
                  <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
              </div>
            </form>
          </div>
        </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                Email
                </th>
                <th scope="col" className="px-6 py-3">
                Role
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
				    <tbody>
              {users.map(item => (
                <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {item.email}
                  </th>
                  <td className="px-6 py-4">
                  {item.role}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link sclassName="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                  </td>
                </tr>
                ))}
				    </tbody>
			    </table>
        </div>
    )
  }
}
