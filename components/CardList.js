export const CardList = ({ tripData = [] }) => {
	console.log(tripData)
	return tripData.map((tripItem) => (
		<div key={tripItem.id} className="card w-96 bg-base-100 shadow-xl m-8">
			<figure>
				<img src={tripItem.imgKey} alt={tripItem.description} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{tripItem.title}</h2>
				<p>{tripItem.description}</p>
			</div>
		</div>
	))
}
