import React, { PureComponent } from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import PropTypes from 'prop-types';
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DATA, DATA01, DATA02, DATA03 } from './data'; 

const COLORS1 = ['#0088FE', '#00C49F', '#FFBB28'];
const COLORS2 = ['#c57792','#77c5bf', '#0088FE', '#00C49F','#d62728', '#FFBB28', '#9467bd','#8c564b','#e377c2','#ff7f0e'];

export default function FactoryDashboard() {
  return (
	<>
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
	  	
        <div className="rounded bg-white h-96 shadow-sm">
			<div className="rounded-lg bg-gray-200 w-4/5 p-2 m-3 ml-5">
				<div className="flex">
					<input type="text"  className="w-full bg-white pl-2 text-base font-semibold outline-0" placeholder="month/year" id="" />
					<input type="button" value="Select" className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"/>
				</div>
			</div>
			<div className='p-2 h-64'> 
				<ResponsiveContainer width="80%" aspect={2}>
					<PieChart width={400} height={400}>
					<Pie
						data={DATA01}
						cx="50%"
						cy="57%"
						outerRadius={90}
						label
					>
						{DATA01.map((entry, index) => (
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
			<div className="rounded-lg bg-gray-200 w-4/5 p-2 m-3 ml-5">
				<div className="flex">
					<select
					type="number"
					name="status"
					id="status"
					class="w-full bg-white pl-2 text-base font-semibold outline-0 h-9"
					>
						<option value="type">Dòng sản phẩm</option>
						<option value="factory">Cơ sở sản xuất</option>
						<option value="store">Đại lí phân phối</option>
					</select>
				</div>
			</div>
			<div className=' items-center'> 
				<ResponsiveContainer width="90%" aspect={2}>
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
					<XAxis dataKey="name"/>
					<CartesianGrid strokeDasharray="3 3" />
					<YAxis />
					<Tooltip />
					<Legend/>
					<Bar dataKey="pv" stackId="a" fill="#22c55e" />
					<Bar dataKey="uv" stackId="a" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div class="flex flex-col items-center justify-center text-center space-y-2 mb-4">
				<div class="font-semibold text-xl">
					<p>Biểu đồ thống kê tỉ lệ sản phẩm bị lỗi</p>
				</div>
			</div>
		</div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mb-5 h-96">

		<div className="rounded bg-white shadow-sm pt-5">
			<div className="rounded-lg bg-gray-200 w-4/5 p-2 m-3 ml-5">
				<div className="flex">
					<input type="text"  className="w-full bg-white pl-2 text-base font-semibold outline-0" placeholder="year" id="" />
					<input type="button" value="Select" className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"/>
				</div>
			</div>
			<div className='pl-10 pt-5 items-center'> 
				<ResponsiveContainer width="80%" aspect={2}>
					<BarChart width={50} height={20} data={DATA}>
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
						<Bar dataKey="uv" fill="#ea580c" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div class="flex flex-col items-center justify-center text-center space-y-2 mt-2">
				<div class="font-semibold text-xl">
					<p>Bảng thống kê sản phẩm theo tháng</p>
				</div>
			</div>
		</div>

		<div className="rounded bg-white h-96 shadow-sm pt-5">
			<div className='pl-10 pt-24 items-center h-80'> 
				<ResponsiveContainer width="80%" aspect={2}>
					<BarChart width={50} height={20} data={DATA}>
						<XAxis dataKey="date" tickFormatter={monthTickFormatter} />
						<CartesianGrid strokeDasharray="3 3" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="uv" fill="#22c55e" />
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div class="flex flex-col items-center justify-center text-center mt-1 ">
				<div class="font-semibold text-xl">
					<p>Bảng thống kê sản phẩm theo năm</p>
				</div>
			</div>
		</div>
	  </div>

	  
    </>
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
