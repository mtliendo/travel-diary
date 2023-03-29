import { API } from 'aws-amplify'
import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { TripForm } from '../components/TripForm'
import { createTrip } from '../src/graphql/mutations'

const AddTripPage = () => {
	const [currImgKey, setCurrImgKey] = useState()
	const handleFileUploadSuccess = (key) => {
		console.log(key)
		setCurrImgKey(key)
	}

	const handleFormSubmit = async (e) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const title = formData.get('title')?.valueOf()
		const description = formData.get('description')?.valueOf()

		console.log(title)
		console.log(description)
		await API.graphql({
			query: createTrip,
			variables: {
				input: {
					title,
					description,
					imgID: currImgKey,
				},
			},
		})
	}
	return (
		<>
			<Navbar />
			<TripForm
				handleFileUploadSuccess={handleFileUploadSuccess}
				handleFormSubmit={handleFormSubmit}
			/>
		</>
	)
}

export default AddTripPage
