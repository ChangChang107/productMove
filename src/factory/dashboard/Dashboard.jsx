import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieIconA, PieIconF, PieIconG, PieIconH } from '../../components/shared/icon';
import axios from 'axios';

let reqInstance = axios.create({
  headers: {
    cookie : `token=${localStorage.getItem('token')}`
    }
})

const COLORS1 = ['#0088FE', '#00C49F', '#FFBB28'];
const COLORS2 = ['#c57792','#77c5bf', '#0088FE', '#00C49F','#d62728', '#FFBB28', '#9467bd','#8c564b','#e377c2','#ff7f0e'];

export default function FactoryDashboard() {

	const[textInput01, setTextInput01] = useState("");
	const[textInput02, setTextInput02] = useState("");
	

  return (
	<>

	  <div className="grid lg:grid-cols-2 gap-5 mb-5">
	  	
	  <div className="rounded bg-white h-96 shadow-sm">
					<div className="rounded-lg bg-gray-200 w-4/5 p-2 m-3 ml-5">
						<div className="flex">
							<input type="text"  className="w-full bg-white pl-2 text-base font-semibold outline-0" placeholder="month/year" id="" 
							value={textInput01} onChange={(e)=>setTextInput01(e.target.value)}
							/>
							<input type="button" value="Select" className="bg-green-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-green-800 transition-colors" 
							onClick={(e)=>{
								e.preventDefault()
								getData1(textInput01)
							}}
							/>
						</div>
					</div>
					<div className='p-2 h-64'> 
						<ResponsiveContainer width="80%" aspect={2}>
							<PieChart width={400} height={400}>
							<Pie
								data={PieIconA}
								cx="50%"
								cy="55%"
								outerRadius={90}
								label
							>
								{PieIconA.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
								))}
							</Pie>
							<Tooltip />
							<Legend 
							verticalAlign="top"
							align = "right"
							layout='vertical'
							/>
							</PieChart>
						</ResponsiveContainer>
					</div>
					<div class="flex flex-col items-center justify-center text-center space-y-2 mt-2">
						<div class="font-semibold text-xl">
							<p>Bảng thống kê trạng thái sản phẩm</p>
						</div>
					</div>
				</div>

        <div className="rounded bg-white shadow-sm">
			<div className=' items-center pt-20'> 
				<ResponsiveContainer width="90%" aspect={2}>
					<BarChart
					width={500}
					height={300}
					data={PieIconH}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					>
					<XAxis dataKey="name"/>
					<CartesianGrid strokeDasharray="3 3" />
					<YAxis />
					<Tooltip />
					<Legend/>
					<Bar dataKey="normal" stackId="a" fill="#22c55e" />
					<Bar dataKey="fail" stackId="a" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div class="flex flex-col items-center justify-center text-center space-y-2 mb-4">
				<div class="font-semibold text-xl">
					<p>Biểu đồ thống kê tỉ lệ sản phẩm bị lỗi theo dòng sản phẩm</p>
				</div>
			</div>
		</div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mb-5 h-96">

		<div className="rounded bg-white shadow-sm pt-5">
			<div className="rounded-lg bg-gray-200 w-4/5 p-2 m-3 ml-5">
				<div className="flex">
					<input type="text"  className="w-full bg-white pl-2 text-base font-semibold outline-0" placeholder="year" id="" 
					value={textInput02} onChange={(e)=>setTextInput02(e.target.value)}
					/>
					<input type="button" value="Select" className="bg-green-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-green-800 transition-colors"
					onClick={(e)=>{
						e.preventDefault()
						getData3(textInput02)
					}}
					/>
				</div>
			</div>
			<div className='pl-10 pt-5 items-center'> 
				<ResponsiveContainer width="80%" aspect={2}>
					<BarChart width={50} height={20} data={PieIconG}>
						<XAxis dataKey="date" tickFormatter={monthTickFormatter} />
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis
							dataKey="date"
							axisLine={false}
							tickLine={false}
							interval={0}
							tick={renderQuarterTick}
							height={1}
							scale="band"
							xAxisId="quarter"
						/>
						<YAxis />
						<Tooltip />
						<Bar dataKey="numberProduct" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div class="flex flex-col items-center justify-center text-center space-y-2 mt-2">
				<div class="font-semibold text-xl">
					<p>Biểu đồ thống kê sản phẩm theo tháng</p>
				</div>
			</div>
		</div>

		<div className="rounded bg-white h-96 shadow-sm pt-5">
			<div className='pl-10 pt-24 items-center h-80'> 
				<ResponsiveContainer width="80%" aspect={2}>
					<BarChart width={50} height={20} data={PieIconF}>
						<XAxis dataKey="date"  />
						<CartesianGrid strokeDasharray="3 3" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="numberProduct" fill="#22c55e" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div class="flex flex-col items-center justify-center text-center mt-1 ">
				<div class="font-semibold text-xl">
					<p>Biểu đồ thống kê sản phẩm theo năm</p>
				</div>
			</div>
		</div>
	  </div>

	  
    </>
  )
}

// lấy dữ liệu vào biểu đồ thống kê sản phẩm theo trạng thái
const getData1 = (textInput) => {
	
	const date = textInput.split("-");
	const year = parseInt(date[0])
	const month = parseInt(date[1])
	let data01 = 0;
	let data02 = 0;
	let data03 = 0;

	axios.get('http://localhost:8000/factory/products/product-in-year?year=2022&month=2&status=1', {
		  withCredentials:true,
		  headers:{
			'authorization': `${localStorage.getItem('token')}`
		  }
		}).then(res => {
			data01 = res.data.amount
			console.log(data01)
		}).catch(err => {
		  console.log(err)
		});

	axios.get('http://localhost:8000/factory/products/product-in-year?year=2022&month=2&status=3', {
		withCredentials:true,
		headers:{
			'authorization': `${localStorage.getItem('token')}`
		}
		}).then(res => {
			data02 = res.data.amount
			console.log(data01)
		}).catch(err => {
		console.log(err)
		});
	axios.get('http://localhost:8000/factory/products/product-in-year?year=2022&month=2&status=8', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data01 = res.data.amount
		console.log(data03)
	}).catch(err => {
		console.log(err)
	});
	
	const data = [
		{
			name: 'Mới sản xuất',
			numberProduct: data01
		},
		{
			name: 'Đã bán',
			numberProduct: data02
		},
		{
			name: 'Đã thu hồi',
			numberProduct: data03
		}
	]
	return data
  };

// lấy dữ liệu vào biểu đồ thống kê sản phẩm theo tháng
const getData3 = (textInput) => {
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
	
	axios.get('http://localhost:8000/factory/products/product-in-month?year=2022&month=1&status=1', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data01 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/factory/products/product-in-month?year=2022&month=2&status=1', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data02 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/factory/products/product-in-month?year=2022&month=3&status=1', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data03 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/factory/products/product-in-month?year=2022&month=4&status=1', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data04 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/factory/products/product-in-month?year=2022&month=5&status=1', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data05 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/factory/products/product-in-month?year=2022&month=6&status=1', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data06 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/factory/products/product-in-month?year=2022&month=7&status=1', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data07 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/factory/products/product-in-month?year=2022&month=8&status=1', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data08 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/factory/products/product-in-month?year=2022&month=9&status=1', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data09 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/factory/products/product-in-month?year=2022&month=10&status=1', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data10 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/factory/products/product-in-month?year=2022&month=11&status=1', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data11 = res.data.amount
	}).catch(err => {
		console.log(err)
	});
	axios.get('http://localhost:8000/factory/products/product-in-month?year=2022&month=12&status=1', {
		withCredentials:true,
		headers:{
		'authorization': `${localStorage.getItem('token')}`
		}
	}).then(res => {
		data12 = res.data.amount
	}).catch(err => {
		console.log(err)
	});

	const data = [
		{ 
			date: textInput + '-01',
			numberProduct: data01
		  },
		  {
			date: textInput + '-02',
			numberProduct: data02
		  },
		  {
			date: textInput + '-03',
			numberProduct: data03
		  },
		  {
			date: textInput + '-04',
			numberProduct: data04
		  },
		  {
			date: textInput + '-05',
			numberProduct: data05
		  },
		  {
			date: textInput + '-06',
			numberProduct: data06
		  },
		  {
			date: textInput + '-07',
			numberProduct: data07
		  },
		  {
			date: textInput + '-08',
			numberProduct: data08
		  },
		  {
			date: textInput + '-09',
			numberProduct: data09
		  },
		  {
			date: textInput + '-10',
			numberProduct: data10
		  },
		  {
			date: textInput + '-11',
			numberProduct: data11
		  },
		  {
			date: textInput + '-12',
			numberProduct: data12
		  }
	]

	return data;
};

// lấy dữ liệu cho biểu đồ thống kê sản phẩm nhập vào theo năm 
const getData4 = () => {
	let data01 = 0
	let data02 = 0
	let data03 = 0

	axios.get('http://localhost:8000/factory/products/product-in-year?year=2022&status=1', {
		withCredentials:true,
		headers:{
			'authorization': `${localStorage.getItem('token')}`
		}
		}).then(res => {
			data01 = res.data.amount
		}).catch(err => {
		console.log(err)
		});
	axios.get('http://localhost:8000/factory/products/product-in-year?year=2021&status=1', {
		withCredentials:true,
		headers:{
			'authorization': `${localStorage.getItem('token')}`
		}
		}).then(res => {
			data02 = res.data.amount
		}).catch(err => {
		console.log(err)
		});
	axios.get('http://localhost:8000/factory/products/product-in-year?year=2020&status=1', {
		withCredentials:true,
		headers:{
			'authorization': `${localStorage.getItem('token')}`
		}
		}).then(res => {
			data03 = res.data.amount
		}).catch(err => {
		console.log(err)
		});

	const data = [
		{ date: '2020',
		numberProduct: data03 },
		{ date: '2021',
		numberProduct: data02 },
		{ date: '2022',
		numberProduct: data01 }
	]
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


  const getPath = (x, y, width, height) => `M${x},${y + height}
  C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;

const TriangleBar = (props) => {
const { fill, x, y, width, height } = props;

return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
fill: PropTypes.string,
x: PropTypes.number,
y: PropTypes.number,
width: PropTypes.number,
height: PropTypes.number,
};





