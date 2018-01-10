import React from "react";
import { Link } from "react-router";
import CSSTransitionGroup from "react-addons-css-transition-group";

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img
              src={post.display_src}
              alt={post.caption}
              className="grid-photo"
            />
          </Link>

          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button
              onClick={this.props.increment.bind(null, i)}
              className="likes"
            >
              &hearts; {post.likes}
            </button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble" />
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
});

export const AddBox = React.createClass({
  render() {
    var box = {
      display_src:
        "https://res.cloudinary.com/instadoge/image/upload/v1515526596/instagram-image-size_a1l4uv.png",
      caption: "Add a new Photo"
    };
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/add`}>
            <img
              src={box.display_src}
              alt={box.caption}
              className="grid-photo"
            />
          </Link>
        </div>
        <figcaption className="center">
          <p>{box.caption}</p>
        </figcaption>
      </figure>
    );
  }
});
export default Photo;
