import Link from 'next/link'

export const Hero = () => {
	return (
		<div
			className="hero min-h-screen"
			style={{
				backgroundImage: `url("https://res.cloudinary.com/focusotter-tuts/image/upload/e_blur:214,f_auto,q_auto/v1678928041/lgbmuyncmwhbstp12cdn.jpg")`,
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-lg">
					<h1 className=" mb-5 text-7xl font-bold">Hello there</h1>
					<p className="mb-5 text-xl ">
						This is a demo app 😅. While travelling for devRel, I wanted to keep
						a scrapbook of my favorite spots. Scroll down to see a few of them.
					</p>
					<p className="mb-5 text-xl ">To add a new trip, click the button!</p>
					<Link className="btn btn-primary" href={'/add-trip'}>
						Add a Trip!
					</Link>
				</div>
			</div>
		</div>
	)
}
