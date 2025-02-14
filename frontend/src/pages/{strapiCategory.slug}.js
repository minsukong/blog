import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

const Category = ({ data }) => {
  return (
    <Layout pageTitle={data.strapiCategory.name}>
      {JSON.stringify(data.strapiCategory.posts) !== "[]" ? (
        <ul class="postlist">
          {data.strapiCategory.posts.map((post) => (
            <li key={post.id}>
              <Link class="postlink" to={`/${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>
              <p class="date">{post.date}</p>
              <p class="name">Written by {post.author.name}</p>
              <p class="description">{post.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>!!카테고리 없음!!</div>
      )}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    strapiCategory(id: { eq: $id }) {
      posts {
        author {
          name
        }
        date(formatString: "MMMM D, YYYY")
        description
        slug
        title
        id
      }
      name
      id
      slug
    }
  }
`;

export const Head = ({ data }) => (
  <title>{data.strapiCategory.name} - Strapi Gatsby Blog Site</title>
);

export default Category;
