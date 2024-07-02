import SearchIcon from "@/components/Header/SearchIcon";
import Link from "@/components/Reuseable/Link";
import { blogDetailsSidebar } from "@/data/newsArea";
import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Image } from "react-bootstrap";

const { categories, tags, posts } = blogDetailsSidebar;

const SidebarPostSingle = ({ post = {} }) => {
  const { image, title } = post;

  return (
    <div className="sidebar__post__single">
      <div className="sidebar__post-image">
        <div className="inner-block">
          <Image
            src={require(`src/assets/images/${image}`).default.src}
            alt="Awesome Image"
          />
        </div>
      </div>
      <div className="sidebar__post-content">
        <h4 className="sidebar__post-title">
          <Link href="/single-post">{title}</Link>
        </h4>
      </div>
    </div>
  );
};

const BlogDetailsSidebar = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__search">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sidebar__search-form"
        >
          <input type="text" name="search" placeholder="Search here..." />
          <button type="submit">
            <SearchIcon color="#fff" />
          </button>
        </form>
      </div>
      <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__category-list">
          {categories.map((category, i) => (
            <li key={i} className="sidebar__category-list-item">
              <a href="#">{category} </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Recent Posts</h3>
        <div className="sidebar__post-wrap">
          {posts.map((post) => (
            <SidebarPostSingle post={post} key={post.id} />
          ))}
        </div>
      </div>
      <div className="sidebar__single sidebar__tags">
        <h3 className="sidebar__title">Tags</h3>
        <ul className="sidebar__tags-list">
          {tags.map((tag, i) => (
            <li key={i} className="sidebar__tags-list-item me-1">
              <a href="#">{tag},</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetailsSidebar;
