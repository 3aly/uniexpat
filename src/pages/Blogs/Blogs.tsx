// src/components/BlogPage.jsx
import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useParams } from "react-router-dom";
// import blogData from "../data/blogData"; // Assuming you have a blogData file
import { useResize } from "@hooks/useResize";
import { getBlogsCovers } from "@utils/getBlogsCovers";
import { IMAGES } from "@assets/images";
import { MoreBlogs } from "@components/organisms";
const blogData = getBlogsCovers();
const BlogPage = () => {
  const { id } = useParams();
  const { isMobile } = useResize();
  const blog = {
    image: IMAGES.blog1,
    title: "Interesting title for this content",
    author: "Juan",
    category: "Category",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet libero ullamcorper, pellentesque sem id, tincidunt elit. Etiam dignissim orci non arcu elementum posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet libero ullamcorper, pellentesque sem id, tincidunt elit. Etiam dignissim orci non arcu elementum posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet libero ullamcorper, pellentesque sem id, tincidunt elit. Etiam dignissim orci non arcu elementum posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet libero ullamcorper, pellentesque sem id, tincidunt elit. Etiam dignissim orci non arcu elementum posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet libero ullamcorper, pellentesque sem id, tincidunt elit. Etiam dignissim orci non arcu elementum posuere.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet libero ullamcorper, pellentesque sem id, tincidunt elit. Etiam dignissim orci non arcu elementum posuere.",
  };
  return (
    <Container className="flex flex-col lg:flex-row p-4">
      <div className="lg:w-3/4 pr-4">
        <CardMedia
          component="img"
          alt={blog.title}
          height={isMobile ? "200" : "400"}
          image={blog.image}
        />
        <CardContent>
          <Typography variant="h4" component="div" className="font-bold mb-2">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" className="mb-4">
            {blog.category} - {blog.author}
          </Typography>
          <Typography variant="body1">{blog.description}</Typography>
        </CardContent>
      </div>
      <MoreBlogs />
    </Container>
  );
};

export default BlogPage;
