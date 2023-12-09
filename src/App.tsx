import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
	const [serialNumber, setSerialNumber] = useState('');
	const [vatNumber, setVatNumber] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		// You can perform any actions with the serialNumber and vatNumber here
		console.log('Serial Number:', serialNumber);
		console.log('VAT Number:', vatNumber);

		// Reset the form after submission if needed
		setSerialNumber('');
		setVatNumber('');
	};

	return (
		<>
			<h1>FAKE COMPANY</h1>
			<h3>EMS DEVICE LOOKUP</h3>
			<div className='form-holder'>
				<Form className='mb-5' onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='formBasicSN'>
						<Form.Label>Device Serial Number</Form.Label>
						<Form.Control
							value={serialNumber}
							onChange={e => setSerialNumber(e.target.value)}
							type='text'
							placeholder='type your device serial number here'
						/>
					</Form.Group>

					<Form.Group className='mb-3' controlId='formBasicVAT'>
						<Form.Label>VAT Number</Form.Label>
						<Form.Control
							value={vatNumber}
							onChange={e => setVatNumber(e.target.value)}
							type='text'
							placeholder='type your company VAT number'
						/>
					</Form.Group>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
		</>
	);
}

export default App;
