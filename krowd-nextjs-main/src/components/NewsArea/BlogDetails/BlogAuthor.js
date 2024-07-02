import { blogAuthor } from "@/data/newsArea";
import React from "react";
import { Image } from "react-bootstrap";

const { image, name, text } = blogAuthor;

const BlogAuthor = () => {
  return (
    <div className="blog-author">
      <div className="blog-author__image">
        <Image src={image.src} alt="author" />
      </div>
      <div className="blog-author__content">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BlogAuthor;
