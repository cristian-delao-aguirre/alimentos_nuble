import '../../assets/css/general.css'
import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, BarElement, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

class Gral_bar_venta_acumulada extends React.Component {
	options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'bottom'
			},
		  	title: {
				padding: 20,
				display: true,
				text: 'Venta acumulada vs Meta'
			},
		},
	};
	 
	data = {
		labels: ['VENDEDOR 1', 'VENDEDOR 2', 'VENDEDOR 3', 'VENDEDOR 4', 'VENDEDOR 5', 'VENDEDOR 6', 'VENDEDOR 7'],
		datasets: [
		  {
			 label: 'Venta Acumulada',
			 data: [123,145,374,535,745,432,557],
			 backgroundColor: 'rgba(220, 53, 69, 0.8)',
		  },
		  {
			 label: 'Meta',
			 data: [872,653,656,100,234,536,899],
			 backgroundColor: 'rgba(25, 135, 84, 0.8)',
		  },
		],
	};
	render(){
		return (
			<div className="row charts-padding">
				<Bar options={this.options} data={this.data} />
			</div>
		)
	}
}

export default Gral_bar_venta_acumulada;


