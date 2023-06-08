import Link from 'next/link'

export const Navbar = ({ signOut }) => {
	return (
		<div className="navbar bg-base-100">
			<div className="flex-1">
				<Link className="btn btn-ghost normal-case text-xl" href={'/'}>
					Focus Otter
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href={'/add-trip'}>add trip</Link>
					</li>
					{signOut && (
						<li>
							<button onClick={signOut}>sign out</button>
						</li>
					)}
				</ul>
			</div>
		</div>
	)
}
