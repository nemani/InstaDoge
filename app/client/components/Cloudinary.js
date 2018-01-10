import React, { Component, PropTypes } from "react";
import Dropzone from "react-dropzone";
import request from "superagent";

import Form from "./Form";

const CLOUDINARY_UPLOAD_PRESET = "hujsd0o9";
const CLOUDINARY_UPLOAD_URL =
	"https://api.cloudinary.com/v1_1/instadoge/image/upload";

export default class Cloudinary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			uploadedFileCloudinaryUrl:
				"https://res.cloudinary.com/instadoge/image/upload/v1515526596/instagram-image-size_a1l4uv.png"
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
	box() {
		return {
			display_src:
				"https://res.cloudinary.com/instadoge/image/upload/v1515526596/instagram-image-size_a1l4uv.png",
			instructions: "Drop on or click here to upload a new Photo"
		};
	}
	onImageDrop(files) {
		this.setState({
			uploadedFile: files[0],
			uploadedFileCloudinaryUrl: files[0].preview
		});
		console.log(files[0].preview);
	}
	handleFormSubmit(caption) {
		if (this.state.uploadedFileCloudinaryUrl !== this.box().display_src) {
			this.handleImageUpload(this.state.uploadedFile, caption);
		}
	}
	handleImageUpload(file, caption) {
		let upload = request
			.post(CLOUDINARY_UPLOAD_URL)
			.field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
			.field("file", file);

		upload.end((err, response) => {
			if (err) {
				console.error(err);
			}

			if (response.body.secure_url !== "") {
				this.setState({
					uploadedFileCloudinaryUrl: response.body.secure_url
				});
				// Dispatch Action Modifying store
				this.props.addPost(
					response.body.public_id,
					response.body.secure_url,
					caption
				);
				this.props.history.goBack();
			}
		});
	}

	render() {
		return (
			<div className="cloudinary-wrap">
				<Dropzone
					multiple={false}
					accept="image/*"
					onDrop={this.onImageDrop.bind(this)}
					className="dz"
				>
					<img
						className="img-preview"
						src={this.state.uploadedFileCloudinaryUrl}
						alt={this.box().instructions}
					/>
					<figcaption>
						<p className="instructions">
							{this.box().instructions}
						</p>
					</figcaption>
				</Dropzone>
				<Form className="capForm" onSubmit={this.handleFormSubmit} />
			</div>
		);
	}
}
