import { usePosts } from '../hooks/usePosts'; // Adjust the import path based on your file structure.
import { useParams } from 'react-router-dom';

export const UserDetail = () => {
    const { userId } = useParams();
    const { posts, isLoading, error } = usePosts(userId);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="user-detail">
            <h2>Posts by User {userId}</h2>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <h5>{post.title}</h5>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}
