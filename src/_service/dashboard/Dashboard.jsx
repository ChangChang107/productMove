import React, { PureComponent } from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DATA, DATA01, DATA02 } from './data'; 

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function ServiceDashboard() {
  return (
	<div>
	  <div className="flex gap-4 mb-5">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoBagHandle className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Sales</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$54232</strong>
						<span className="text-sm text-green-500 pl-2">+343</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoPieChart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Expenses</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$3423</strong>
						<span className="text-sm text-green-500 pl-2">-343</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Customers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">12313</strong>
						<span className="text-sm text-red-500 pl-2">-30</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<IoCart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Orders</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">16432</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper>
	  </div>
	  
      <div className="grid lg:grid-cols-2 gap-5 mb-5">
		<div className="rounded bg-white shadow-sm pt-5">
			<div className="rounded-lg bg-gray-200 w-4/5 p-2 m-2 ml-5">
				<div className="flex">
					<input type="text"  className="w-full bg-white pl-2 text-base font-semibold outline-0" placeholder="month/year" id="" />
					<input type="button" value="Select" className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"/>
				</div>
			</div>
			<div className='pl-0 pt-10 items-center h-96'> 
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
					<Bar dataKey="pv" stackId="a" fill="#22c55e" />
					<Bar dataKey="uv" stackId="a" fill="#ea580c" />
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
					<XAxis dataKey="date" tickFormatter={monthTickFormatter} />
					<CartesianGrid strokeDasharray="3 3" />
					<YAxis />
					<Tooltip />
					<Legend 
					height={10}
					align='right'
					layout='vertical'/>
					<Bar dataKey="pv" stackId="a" fill="#22c55e" />
					<Bar dataKey="uv" stackId="a" fill="#ea580c" />
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

