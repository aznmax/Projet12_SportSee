import React, { useEffect, useState } from 'react';
import "./SessionChart.scss";
import * as d3 from "d3";
import PropTypes from 'prop-types';

/**
 * @component
 * @memberOf Dashboard
 * @description Component who show the sport sessions length of the user for each day, on a line chart
 * @param  {object} props Activities datas of the user
 */
function SessionChartD3(props) {

	// console.log(props)
	const userDatas = props.data.sessions.sessions
	// eslint-disable-next-line no-unused-vars
	const [userData, setUserData] = useState(userDatas)

	// console.log(userData)
	const sessData = props.sessions

	useEffect(() => {
		draw()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	function draw() {

		// Création des diemnsions nécessaires dans des variableses dimensions 
		let margin = { top: 20, right: 20, bottom: 0, left: 20 };
		// eslint-disable-next-line no-unused-vars
		let width = 258 - margin.left - margin.right;
		let height = 263 - margin.top - margin.bottom;
		// Create the chart
		let chart = d3.select(".lineChart")
			.append("svg")
			.attr("width", "100%")
			.attr("height", "100%")
		// Clean the svg chart if the component re-render
		chart.selectAll(".lineChart .d3").remove()
		let min = d3.min(sessData)
		let max = d3.max(sessData)
		let xScale = d3.scaleLinear()
			.domain([0.5, 7.5])
			.range([-50, 200])
		// console.log(d3.extent(userData, d => d.day))
		let yScale = d3.scaleLinear()
			.domain([min, max + 30])
			.range([height - 40, 0])
		// Register the line
		let line = d3.line()
			.x(d => d.x || xScale(d.day))
			.y(d => d.y || yScale(d.sessionLength))
			.curve(d3.curveMonotoneX)

		const linePath = line(userDatas);

		// Draw the path
		chart.append("path")
			.datum(getPathCoordinates([-15, 0, 15, 30, 45, 60, 75, 90, 100, 115]))
			.attr("d", linePath)
			.attr("class", "d3")
			.attr("stroke", "white")
			.attr("stroke-width", "3")
			.attr("fill", "none")
			// launch the transition for the line chart
			.transition()
			.duration(750)
			.call(lineTween)
		// Add coordinates for the points to draw info box, transparent div...
		// eslint-disable-next-line array-callback-return
		getPathCoordinates([...userData]).map((coordinates, index) => {
			let group = chart.append("g")
				.attr("id", "session" + index)
				.attr("class", "d3")
			group.append("rect")
				.attr("x", coordinates.x + 41)
				.attr("y", 0)
				.attr("width", "100%")
				.attr("height", "100%")
				.attr("class", "d3")
				.attr("fill", "rgba(17, 24, 39, 0.3)")
				.attr("opacity", "0")
			group.append("rect")
				.attr("x", getBubbleXCoordinate(coordinates.x) + 51)
				.attr("y", coordinates.y - 25)
				.attr("class", "d3")
				.attr("width", "50")
				.attr("height", 30)
				.attr("fill", "white")
				.attr("opacity", "0")
			group.append("text")
				.attr("x", getBubbleXCoordinate(coordinates.x) + 76)
				.attr("y", coordinates.y - 7)
				.style("text-anchor", "middle")
				.attr("class", "d3")
				.text(userData[index].sessionLength + "min")
				.attr("opacity", "0")
			group.append("circle")
				.attr("class", "d3")
				.attr("cx", coordinates.x + 39)
				.attr("cy", coordinates.y)
				.attr("r", 4)
				.attr("opacity", "0")
				.attr("fill", "white")
			// hitbox
			chart.append("rect")
				.attr("x", coordinates.x + 21)
				.attr("y", 0)
				.attr("width", 41)
				.attr("height", 300)
				.attr("class", "d3")
				.attr("opacity", "0")
				// Make appear informations on hover
				.on("mouseover", function () {
					d3.selectAll(`#session${index} > *`).transition()
						.attr("opacity", "1")
				})
				.on("mouseout", function () {
					d3.selectAll(`#session${index} > *`).transition()
						.attr("opacity", "0")
				})

		})
		// Register the transition
		function lineTween(transition) {
			transition.attrTween("d", function (d) {
				let interpolateEnd = d3.interpolate(d, getPathCoordinates([20, ...userData, 75]))
				return function (t) {
					d = interpolateEnd(t)
					return line(d)
				}
			})
		}
		// Function to get the coordiantes of the points to draw
		function getPathCoordinates(dataPoints) {
			let coordinates = dataPoints.map((point, index) => (
				{
					x: index * 37 - 23,
					y: (215 - 215 * (point / 144)) || yScale(point.sessionLength)
				}
			))
			// console.log(coordinates)
			return coordinates
		}
		// Function to make the last day box appear on the chart and not outside
		function getBubbleXCoordinate(x) {
			if (x <= 170) return x
			else return 125
		}
	}

	return (
		<div className="lineChart" >
			<p className="lineChart-title">Durée moyenne des sessions</p>

			<div className="days">
				<p>L</p>
				<p>M</p>
				<p>M</p>
				<p>J</p>
				<p>V</p>
				<p>S</p>
				<p>D</p>
			</div>
		</div>
	)
}

SessionChartD3.propTypes = {
	/**
	 * User's datas, length of a sport session on minutes
	 */
	data: PropTypes.object.isRequired,
}

export default SessionChartD3;