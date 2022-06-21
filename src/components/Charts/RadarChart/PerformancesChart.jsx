import React, { useState} from 'react';
import "./PerformancesChart.scss";
import radar from "./radar.svg";
import {Tooltip, ResponsiveContainer ,Label, RadarChart, PolarAngleAxis, PolarRadiusAxis, Radar} from 'recharts';
import PropTypes from 'prop-types';

/**
 * Format the box who appears on center on the Circle Chart
 * @param  {} payload datas we need to take to show informations on the tooltip
 */
const CustomizedTooltip = ({payload}) => {

	if (payload && payload.length) {
		return (
			<div className="custom-tooltip-radar">
			  <h1 className="desc">{payload[0].value}</h1>
			</div>
		)
	}
  
	return null;
};


/**
 * @component
 * @memberOf Dashboard
 * @description Component who show the score for each category for the user on a radar chart
 * @param  {object} props Performances datas of the user
 */
function PerformancesChart(props) {

	// Take the datas we need on the props
	const perfDatas = props.data
	// eslint-disable-next-line no-unused-vars
	const [perfData, setPerfData] = useState(perfDatas)
	
	// Taking the maximum score from the performances, and add 30. The maximum score on the
	// chart is every time the best performance score + 30 for each user
	const max = (perfData.data.map((item) => item.value).sort((a, b) => a < b ? 1 : -1)[0] + 30)
	// The datas received are dispatched on the wrong sense, and not appears like wanted by the design.
	// I take an empty array, and put the datas on the other sense
	const reorderPerfData = []
	perfData.data.forEach((elm) => reorderPerfData.unshift(elm))
	// Replace the old datas by the news in the good order
	const orderedPerfData = {...perfData, data: reorderPerfData}
	// console.log(perfData, orderedPerfData)

	return (

		<article className="radarChart" >

			<ResponsiveContainer width="100%" height="100%">

				<RadarChart 
				className="rechartRadar" 
				outerRadius={90} 
				width={263} 
				height={258} 
				data={orderedPerfData.data}
				startAngle={90}
				endAngle={-270}
				>
					
					<PolarAngleAxis 
					dataKey="kind"
					tick={false}
					tickLine={true}
					axisLine={true}
					type="category"
					orient="top"
					>

						<Label
						position="center"
						/>

					</PolarAngleAxis>

					<PolarRadiusAxis 
					angle={30} 
					domain={[0, max]}
					tick={false}
					axisLine={false} 
					tickLine={false}
					/>
						
					<Radar 	
					dataKey="value" 
					stroke="#ff0101" 
					fill="#ff0101" 
					fillOpacity={0.5} 
					/>
							
					<Tooltip
					cursor={false}
					coordinate={{ x: 80, y: 80 }}
					payload={perfData}
					content={<CustomizedTooltip />}
					/>

				</RadarChart>
				
			</ResponsiveContainer>

			<img src={radar} alt="Graphique des performances" />

		</article>
	)
}

PerformancesChart.propTypes = {
	/**
	 * User's datas, the score for each category
	 */
	data: PropTypes.object.isRequired,
}

export default PerformancesChart;