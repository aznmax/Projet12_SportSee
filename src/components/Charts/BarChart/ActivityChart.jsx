import React, { useState} from 'react';
import "./ActivityChart.scss";
import PropTypes from 'prop-types';
import {Tooltip, ResponsiveContainer, BarChart , CartesianGrid, XAxis, YAxis, Bar} from 'recharts';

/**
 * Format the box who appears on hover on the Bar Chart
 * @param  {} active true if the box appears
 * @param  {} payload datas we need to take to show informations on the tooltip
 */
const CustomizedToolTip = ({ active, payload }) => {

	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip-line">
			  <p className="desc">{payload[0].value + "kg"}</p>
			  <p className="desc">{payload[1].value + "Kcal"}</p>
			</div>
		)
	}
	return null;
};

/**
 * @component
 * @category Graph
 * @memberOf Dashboard
 * @description Component who show evolution on a few days of the weight and the used calories of the user, on a bar chart
 * @param  {object} props Activities datas of the user
 */
function ActivityChart(props) {
	
	// Take the datas we need on the props
	let activityDatas = props.data.sessions
	// eslint-disable-next-line no-unused-vars
	const [activityData, setUserData] = useState(activityDatas)

	// Format the information we need to show on the bottom for each chart
	const formatXAxis = (tickItem, i) => {
		return i + 1
	}
	
	return (

		<article className="barChart" >

			<p className="barChart-title" >Activité quotidienne</p>

			<ResponsiveContainer >

				<BarChart width={"100%"} 
				height={"40%"} 
				data={activityData}
				barCategoryGap={"20%"}
				barGap={8}
				margin={{top: 120, bottom: 30, right:30}} 
				>

					<CartesianGrid 
					strokeDasharray="3 3" 
					vertical={false}
					/>

					<XAxis 
					axisLine={false}
					tickLine={false}
					domain={['dataMin', 'dataMax']}
					tickMargin={25}
					tick={{stroke: '#9B9EAC'}}
					tickFormatter={formatXAxis}
					/>

					<YAxis 
					orientation="right" 
					tickCount={3}
					domain={['dataMin - 1', 'dataMax']}
					dataKey="kilogram"
					axisLine={false}
					tickLine={false}
					tickMargin={30}
					tick={{stroke: '#9B9EAC'}}
					/>

					<YAxis 
					tickCount={6}
					domain={[0, 600]}
					dataKey="calories"
					axisLine={false}
					tickLine={false}
					tick={false}
					hide={true}
					yAxisId="cl"
					/>

					<Bar 
					stackId="kg" 
					barSize={8} 
					dataKey="kilogram" 
					label={false} 
					fill="#282D30" 
					radius={[25, 25, 0, 0]}
					/>

					<Bar 
					stackId="cl" 
					barSize={8} 
					dataKey="calories" 
					label={false} 
					fill="#E60000"
					radius={[25, 25, 0, 0]}
					yAxisId="cl"
					/>

					<Tooltip
					label={activityData}
					cursor={{fill: "rgba(0,0,0,0.15)"}}
					content={<CustomizedToolTip/>}
					offset={35}
					/>
					
				</BarChart>

			</ResponsiveContainer>

			<div className="custom-tooltip-legend">

				<div className="kilogram">
					<div className="blackRound"></div>
					<p className="desc">Poids (kg)</p>
				</div>

				<div className="calories">
					<div className="redRound"></div>
					<p className="desc">Calories brûlées (kCal)</p>
				</div>

			</div>

		</article>
	)
}


ActivityChart.propTypes = {
	/**
	 * User's datas, daily burned calories and weight
	 */
	data: PropTypes.object.isRequired,
}

export default ActivityChart;