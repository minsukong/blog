import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.strapiPost.title}>
      <p class="postdate">{data.strapiPost.date}</p>

      <p class="postauthor">Written by {data.strapiPost.author.name}</p>
      <p class="postcategory">
        <Link to={`/${data.strapiPost.category.slug}`}>
          Category: {data.strapiPost.category.name}
        </Link>
      </p>
      <div
        class="postcontent"
        dangerouslySetInnerHTML={{
          __html: data.strapiPost.content.data.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    strapiPost(id: { eq: $id }) {
      author {
        name
      }
      category {
        name
        slug
      }
      content {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
      date(formatString: "MMMM D, YYYY")
      description
      slug
      title
    }
  }
`;

export const Head = ({ data }) => (
  <title>{data.strapiPost.title} - Strapi Gatsby Blog Site</title>
);

export default BlogPost;
