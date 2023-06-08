import { withAuthenticator } from '@aws-amplify/ui-react'
import { API, Storage } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { CardList } from '../components/CardList'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { listTrips } from '../graphql/operations/queries'

function Home({ signOut = () => {} }) {
	const [tripData, setTripData] = useState([])
	useEffect(() => {
		const fetchTripDataAndImages = async () => {
			const updatedTrips = []
			const trips = await API.graphql({ query: listTrips })

			const imgKeys = trips.data.listTrips.map((trip) => trip.imgKey)
			const imgPromises = imgKeys.map((imgKey) => Storage.get(imgKey))
			const images = await Promise.all(imgPromises)
			trips.data.listTrips.forEach((trip, index) => {
				const updatedTrip = { ...trip, imgKey: images[index] }
				updatedTrips.push(updatedTrip)
			})

			setTripData(updatedTrips)
		}
		fetchTripDataAndImages()
	}, [])

	return (
		<>
			<Navbar signOut={signOut} />
			<Hero />
			<main className="flex flex-wrap justify-around">
				<CardList tripData={tripData} />
			</main>
			<Footer />
		</>
	)
}

export default withAuthenticator(Home, {
	signUpAttributes: ['email'],
	hideSignUp: true,
})
