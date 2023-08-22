import styles from './FeaturedPosts.module.css'
import PostsGrid from "../posts/PostsGrid";

function FeaturedPosts(props) {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
        <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;