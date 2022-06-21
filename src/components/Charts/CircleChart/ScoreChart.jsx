import React, { useState } from 'react';
import "./ScoreChart.scss";
import { ResponsiveContainer, PolarAngleAxis, RadialBarChart, RadialBar, Legend } from 'recharts';
import PropTypes from 'prop-types';

/**
 * Format the legend who appears on center on the Circle Chart
 * @param  {} payload datas we need to take to show informations on the legend
 */
const CustomizedLegend = ({ payload }) => {

	if (payload && payload.length) {
		return (
			<div className="custom-legend">
				<h1 className="desc">{payload[0].value + "%"}</h1>
				<p>de votre</p>
				<p>objectif</p>
			</div>
		)
	}

	return null;
};


/**
 * Score chart component
 * @component
 * @memberOf Dashboard
 * @description Component who show the score of the day of the user on a circle chart
 * @param  {object} props Personal informations datas of the user
 */
function ScoreChart(props) {

	// Take the datas we need on the props
	const userDatas = props.data
	// eslint-disable-next-line no-unused-vars
	const [data, setScore] = useState(userDatas)
	// making the datas i need for the chart, just the name, and the value who need to be translated in percents
	let score = [{ "name": "score", "value": (data.todayScore * 100) }]

	return (

		<article className="circleChart">

			<h1 className="score" >Score</h1>
			<div className="path"></div>

			<ResponsiveContainer>

				<RadialBarChart
					width={"100%"}
					height={"100%"}
					innerRadius="72%"
					outerRadius="85%"
					data={score}
					startAngle={90}
					endAngle={450}
				>

					<PolarAngleAxis
						type="number"
						domain={[0, 100]}
						dataKey={'value'}
						angleAxisId={0}
						tick={false}
					/>

					<RadialBar
						minAngle={5}
						fill="#E60000"
						background={{ fill: "#fff" }}
						position="center"
						clockWise={true}
						dataKey="value"
						legendType="square"
						data={score}
						cornerRadius="50%"
					/>

					<Legend
						iconSize={10}
						width={20}
						height={20}
						layout='vertical'
						verticalAlign='top'
						align="center"
						payload={score}
						content={<CustomizedLegend />}
					/>

				</RadialBarChart>

			</ResponsiveContainer>

		</article>
	)
}


ScoreChart.propTypes = {
	/**
	 * User's datas, just a score of the day, who's display in percents
	 */
	data: PropTypes.object.isRequired,
}

export default ScoreChart;