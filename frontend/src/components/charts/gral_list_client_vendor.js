import React from "react";
import '../../assets/css/general.css'
import Donuts from "./gral_donuts_proyection_vendor";
import { Table } from 'react-bootstrap'


class General_list_client_by_vendor extends React.Component {
	render(){
		return (
			<div className="row list-padding">		
                <div className='col-md-8'>
                    <Table className="table">
                        <thead className='thead-dark'>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Nombre Vendedor</th>
                                <th scope='col'>Kilos</th>
                                <th scope='col'>Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope='row'>1</th>
                                <td>VENDEDOR 1</td>
                                <td>546</td>
                                <td>512345</td>
                            </tr>
                            <tr>
                                <th scope='row'>2</th>
                                <td>VENDEDOR 2</td>
                                <td>45</td>
                                <td>1231231231243</td>
                            </tr>
                            <tr>
                                <th scope='row'>3</th>
                                <td>VENDEDOR 3</td>
                                <td>34</td>
                                <td>34234231</td>
                            </tr>
                            <tr>
                                <th scope='row'>4</th>
                                <td>VENDEDOR 4</td>
                                <td>32</td>
                                <td>4322435334</td>
                            </tr>
                            <tr>
                                <th scope='row'>5</th>
                                <td>VENDEDOR 5</td>
                                <td>32</td>
                                <td>4322435334</td>
                            </tr>
                            <tr>
                                <th scope='row'>6</th>
                                <td>VENDEDOR 6</td>
                                <td>32</td>
                                <td>4322435334</td>
                            </tr>
                            <tr>
                                <th scope='row'>7</th>
                                <td>VENDEDOR 7</td>
                                <td>32</td>
                                <td>4322435334</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='col-md-4'>
                    <Donuts></Donuts>
                </div>
            </div>
		)
	}
}


export default General_list_client_by_vendor;