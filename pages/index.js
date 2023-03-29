import { withAuthenticator } from '@aws-amplify/ui-react'
import { API, Storage } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { CardList } from '../components/CardList'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { listTrips } from '../src/graphql/queries'

function Home({ signOut = () => {} }) {
	const [tripData, setTripData] = useState([])
	useEffect(() => {
		const fetchTripDataAndImages = async () => {
			const updatedTrips = []
			const trips = await API.graphql({ query: listTrips })

			const imgIDs = trips.data.listTrips.items.map((trip) => trip.imgID)
			const imgPromises = imgIDs.map((imgID) => Storage.get(imgID))
			const images = await Promise.all(imgPromises)
			trips.data.listTrips.items.forEach((trip, index) => {
				const updatedTrip = { ...trip, imgID: images[index] }
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

export default withAuthenticator(Home, { hideSignUp: true })
