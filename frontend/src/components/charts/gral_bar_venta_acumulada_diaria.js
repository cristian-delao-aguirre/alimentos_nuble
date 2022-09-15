import '../../assets/css/general.css'
import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, BarElement, CategoryScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend );

class Gral_bar_venta_acumulada_diaria extends React.Component {
	options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'bottom'
			},
		  	title: {
				padding: 20,
				display: true,
				text: 'Venta acumulada diaria vs Meta diaria'
			},
		},
	};
	 
	data = {
		labels: ['VENDEDOR 1', 'VENDEDOR 2', 'VENDEDOR 3', 'VENDEDOR 4', 'VENDEDOR 5', 'VENDEDOR 6', 'VENDEDOR 7'],
		datasets: [
		  {
			 label: 'Venta Acumulada',
			 data: [417,700,374,321,745,432,987],
			 backgroundColor: 'rgba(220, 53, 69, 0.8)',
		  },
		  {
			 label: 'Meta',
			 data: [600,653,400,100,234,125,567],
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


export default Gral_bar_venta_acumulada_diaria;