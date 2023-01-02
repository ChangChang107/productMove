import React, { useEffect, useState } from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DATA, DATA01, DATA02 } from './data'; 
import axios from 'axios';

let reqInstance = axios.create({
  headers: {
    cookie : `token=${localStorage.getItem('token')}`
    }
})

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function ServiceDashboard() {

	const[textInput, setTextInput] = useState("12-2022");
	// console.log(getData1())
	useEffect(() => {
		console.log(getData1())
	}, [])

  return (
	<div>
	 
	  
      <div className="grid lg:grid-cols-2 gap-5 mb-5">
		<div className="rounded bg-white shadow-sm pt-5">
			<div className="rounded-lg bg-gray-200 w-4/5 p-2 m-2 ml-5">
				<div className="flex">
					<input type="text"  className="w-full bg-white pl-2 text-base font-semibold outline-0" placeholder="month/year" id="" 
					value={textInput} onChange={(e)=>setTextInput(e.target.value)}
					/>
					<input type="button" value="Select" className="bg-green-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-green-800 transition-colors"
					onClick={(e)=>{
						e.preventDefault()
						getData(textInput)
					}}
					/>
				</div>
			</div>
			<div className='pl-0 pt-10 items-center h-96'> 
				<ResponsiveContainer width="100%" aspect={2}>
					<BarChart
					width={500}
					height={300}
					data={DATA01}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					>
					<XAxis dataKey="date" tickFormatter={monthTickFormatter} />
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis
							dataKey="date"
							axisLine={false}
							tickLine={false}
							interval={0}
							tick={renderQuarterTick}
							height={15}
							scale="band"
							xAxisId="quarter"
						/>
					<YAxis />
					<Tooltip />
					<Legend 
					height={10}
					align='right'
					layout='vertical'/>
					<Bar dataKey="Done" stackId="a" fill="#22c55e" />
					<Bar dataKey="NoService" stackId="a" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div class="flex flex-col items-center justify-center text-center space-y-2 mb-4">
				<div class="font-semibold text-xl">
					<p>Biểu đồ thống kê loại sản phẩm theo tháng</p>
				</div>
			</div>
		</div>
		<div className="rounded bg-white shadow-sm pt-5">
			<div className='mb-16 pt-24 items-center h-96'> 
				<ResponsiveContainer width="100%" aspect={2}>
					<BarChart
					width={500}
					height={300}
					data={DATA02}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					>
					<XAxis dataKey="date"  />
					<CartesianGrid strokeDasharray="3 3" />
					<YAxis />
					<Tooltip />
					<Legend 
					height={10}
					align='right'
					layout='vertical'/>
					<Bar dataKey="Done" stackId="a" fill="#22c55e" />
					<Bar dataKey="NoService" stackId="a" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div class="flex flex-col items-center justify-center text-center space-y-2 mb-2">
				<div class="font-semibold text-xl">
					<p>Biểu đồ thống kê loại sản phẩm theo năm</p>
				</div>
			</div>
      	</div>
	</div>

	</div>
  )
}

const getData = (textInput) => {
	const year = parseInt(textInput)
	let data01 = 0;
	let data02 = 0;
	let data03 = 0;
	let data04 = 0;
	let data05 = 0;
	let data06 = 0;
	let data07 = 0;
	let data08 = 0;
	let data09 = 0;
	let data10 = 0;
	let data11 = 0;
	let data12 = 0;
	let data13 = 0;
	let data14 = 0;
	let data15 = 0;
	let data16 = 0;
	let data17 = 0;
	let data18 = 0;
	let data19 = 0;
	let data20 = 0;
	let data21 = 0;
	let data22 = 0;
	let data23 = 0;
	let data24 = 0;
	

	// truy vấn sản phẩm đã bảo hành trả về đại lý
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 1,
			status: 6
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data01 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 2,
			status: 6
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data02 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 3,
			status: 6
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data03 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 4,
			status: 6
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data04 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 5,
			status: 6
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data05 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 6,
			status: 6
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data06 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 7,
			status: 6
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data07 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 8,
			status: 6
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data08 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 9,
			status: 6
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data09 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 10,
			status: 6
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data10 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 11,
			status: 6
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data11 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 12,
			status: 6
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data12 = res.data.amount
	}).catch(err => {
		console.log(err)
	});

// truy vấn sản phẩm đã trả về cơ sở sản suất
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 1,
			status: 8
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data13 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 2,
			status: 8
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data14 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 3,
			status: 8
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data15 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 4,
			status: 8
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data16 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 5,
			status: 8
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data17 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 6,
			status: 8
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data18 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 7,
			status: 8
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data19 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 8,
			status: 8
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data20 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 9,
			status: 8
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data21 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 10,
			status: 8
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data22 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 11,
			status: 8
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data23 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/service/products/product-out-month?', {
		params: {
			year: year,
			month: 12,
			status: 8
		  },
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data24 = res.data.amount
	}).catch(err => {
		console.log(err)
	});


	const data = [
		{ 
			date: textInput + '-01',
			exportStore: data01,
			exportFactory: data13
		  },
		  {
			date: textInput + '-02',
			exportStore: data02,
			exportFactory: data14
		  },
		  {
			date: textInput + '-03',
			exportStore: data03,
			exportFactory: data15
		  },
		  {
			date: textInput + '-04',
			exportStore: data04,
			exportFactory: data16
		  },
		  {
			date: textInput + '-05',
			exportStore: data05,
			exportFactory: data17
		  },
		  {
			date: textInput + '-06',
			exportStore: data06,
			exportFactory: data18
		  },
		  {
			date: textInput + '-07',
			exportStore: data07,
			exportFactory: data19
		  },
		  {
			date: textInput + '-08',
			exportStore: data08,
			exportFactory: data20
		  },
		  {
			date: textInput + '-09',
			exportStore: data09,
			exportFactory: data21
		  },
		  {
			date: textInput + '-10',
			exportStore: data10,
			exportFactory: data22
		  },
		  {
			date: textInput + '-11',
			exportStore: data11,
			exportFactory: data23
		  },
		  {
			date: textInput + '-12',
			exportStore: data12,
			exportFactory: data24
		  }
	]

	return data;
};

const getData1 = async() => {
	let data01 = 0;
	let data02 = 0;
	let data03 = 0;
	let data04 = 0;
	let data05 = 0;
	let data06 = 0;

	await axios.get('http://localhost:8000/service/products/product-out-year?year=2022&status=6', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data01 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	await axios.get('http://localhost:8000/service/products/product-out-year?year=2022&status=8', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data02 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	await axios.get('http://localhost:8000/service/products/product-out-year?year=2021&status=6', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data03 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	await axios.get('http://localhost:8000/service/products/product-out-year?year=2021&status=8', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data04 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	await axios.get('http://localhost:8000/service/products/product-out-year?year=2020&status=6', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data05 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	await axios.get('http://localhost:8000/service/products/product-out-year?year=2020&status=8', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data06 = res.data.amount
	}).catch(err => {
		console.log(err)
	});

	const data = [
		{
			date: "2020",
			exportStore: data01,
			exportFactory: data02
		},
		{
			date: "2021",
			exportStore: data03,
			exportFactory: data04
		},
		{
			date: "2022",
			exportStore: data05,
			exportFactory: data06
		}
	]

	return data
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

const monthTickFormatter = (tick) => {
	const date = new Date(tick);
  
	return date.getMonth() + 1;
  };

  const renderQuarterTick = (tickProps) => {
	const { x, y, payload } = tickProps;
	const { value, offset } = payload;
	const date = new Date(value);
	const month = date.getMonth();
	const quarterNo = Math.floor(month / 3) + 1;
	const isMidMonth = month % 3 === 1;
  
	if (month % 3 === 1) {
	  return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
	}
  
	const isLast = month === 12;
  
	if (month % 3 === 0 || isLast) {
	  const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;
  
	  return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
	}
	return null;
  };

