'use client';

import { useEffect, useRef } from 'react';
import * as d3 from "d3";
import levels from '../../hemoglobin-data.json';


function LineChart() {

	const gx = useRef();
  	const gy = useRef();

	const data = levels['hemoglobin-levels'];

	// define attr for svg
	const width = 900;
	const height = 600;

	const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 50;
    const marginLeft = 80;


	// make scales 

	const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.level)]) // Set the x-axis domain
        .range([marginLeft, width - marginRight]); // Set the range (pixel width)

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.saturation)]) // Set the y-axis domain
        .range([height - marginBottom, marginTop]); // Set the range (pixel height)

	// make lines
    const line = d3.line()
        .x(d => xScale(d.level)) // Set x position using x scale
        .y(d => yScale(d.saturation)); // Set y position using y scale

	useEffect(() => {
	 	d3.select(gx.current).call(d3.axisBottom(xScale))
	}, [gx, xScale]);

  	useEffect(() => {
  		d3.select(gy.current).call(d3.axisLeft(yScale))
	}, [gy, yScale]);

	
	return (
	  	 <svg 
	  	 	width={width} 
	  	 	height={height} 
	  	 	viewBox={`0 0 ${width} ${height}`}
	  	 	style={{
	  	 		maxWidth: '100%',
	  	 		height: 'auto',
	  	 		height: 'intrinsic',
	  	 	}}
	  	 >
	   	   	<g ref={gx} transform={`translate(0, ${height - marginBottom})`}>
	   	   		<text
	   	   			x={`${width / 2 + marginLeft}`}
	   	   			y="40"  // Positioned below x-axis
	   	   			textAnchor='middle'
	   	   			style={{
	   	   				fontSize: '16px',
	   	   				fill: 'black',
	   	   			}}

	   	   		>Oxigen levels %</text>
	   	   	</g>

	   		<g ref={gy} transform={`translate(${marginLeft}, 0)`}>
	   			<text
	   	   			x={`${-(height / 2) - marginTop}`}
	   	   			y="-40"
	   	   			transform='rotate(-90)'
	   	   			textAnchor='middle'
	   	   			style={{
	   	   				fontSize: '16px',
	   	   				fill: 'black',
	   	   			}}

	   	   		>Hemoglobin Saturation %</text>

	   		</g>

	  	    <path d={line(data)} fill="none" stroke="steelblue" strokeWidth="2">
	  	    </path>

	  	    <g fill="white" stroke="currentColor" strokeWidth="1.5">
		        {data.map((d, i) => (
		        	<circle key={i} cx={xScale(d.level)} cy={yScale(d.saturation)} r="2.5" fill="blue" stroke='black' strokeWidth="1"/>
		        	))}
		      </g>
	  	 </svg>
	)
}

export default LineChart