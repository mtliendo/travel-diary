/*
schema:
type Trip @model @auth(rules:[allow: owner]{
id: ID
title:String
description: String
imgID: String
}
*/
import { StorageManager } from '@aws-amplify/ui-react-storage'

export const TripForm = ({ handleFormSubmit, handleFileUploadSuccess }) => {
	return (
		<form
			onSubmit={handleFormSubmit}
			className="form-control grid grid-cols-2 gap-4 max-w-xl m-auto mt-10"
		>
			<div className="col-span-2">
				<StorageManager
					accessLevel="public"
					acceptedFileTypes={['image/*']}
					maxFileCount={1}
					showThumbnails
					onUploadSuccess={({ key }) => handleFileUploadSuccess(key)}
				/>
			</div>
			<div className="col-span-2">
				<label className="label">
					<span className="label-text">What is the title?</span>
				</label>
				<input
					type="text"
					required
					name="title"
					placeholder="My amazing event"
					className="input input-secondary input-bordered border-2 p-3 md:text-xl w-full"
				/>
			</div>
			<div className="col-span-2">
				<label className="label">
					<span className="label-text">Description (200 character limit)</span>
				</label>
				<textarea
					className="textarea textarea-secondary border-2 p-3 md:text-xl w-full"
					cols={30}
					rows={8}
					placeholder="This was amazing because..."
					name="description"
					maxLength={200}
					required
				></textarea>
			</div>
			<div className="col-span-2 text-right">
				<button
					type="submit"
					className="btn btn-secondary py-3 px-6 w-full sm:w-32"
				>
					Create
				</button>
			</div>
		</form>
	)
}
