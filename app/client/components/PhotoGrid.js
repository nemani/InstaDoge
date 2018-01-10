import React from "react";
import Photo, { AddBox } from "./Photo";

const PhotoGrid = React.createClass({
	render() {
		return (
			<div className="photo-grid">
				<AddBox />
				{this.props.posts.map((post, i) => (
					<Photo {...this.props} key={i} i={i} post={post} />
				))}
			</div>
		);
	}
});

export default PhotoGrid;
