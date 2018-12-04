import React from 'react';
import { DaftarDokterRow } from '../components/DaftarDokterRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { Appointment } from '../utils/Appointment';

export class DaftarDokter extends React.Component {
	/** 
	 * TODO: Akses method getAllPasien() pada Appointment dan lakukan update state. 
	 * TODO: Lakukan pemanggilan pada constructor() atau pada lifecycle componentDidMount()
	 */

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			listDokter: []
		}
		
        this.newFunction();
	}

	

    newFunction() {
        Appointment.getAllDokter().then(response => {
            this.setState({
                loading: false,
                listDokter: response.result
            });
        });
    }

	render() {
		console.log('{this.state.listDokter}')
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="Daftar Dokter" header={['Id Dokter', 'Nama Dokter']}>
                    <DaftarDokterRow listDokter={this.state.listDokter}/>
                </TableContainer>
            )
        }
	}
}