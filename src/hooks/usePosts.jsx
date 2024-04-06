import { useState, useEffect } from 'react';


export const usePosts = (userId) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            if (!userId) return;
            setIsLoading(true);
            try {
              const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
              if (response.ok) {
                const postData = await response.json();
                console.log(postData);
                setPosts(postData);
                setIsLoading(false);
              } else {
                setIsLoading(false);
                throw new Error("Can't fetch the products");
              }
            } catch (error) {
              setError("Can't fetch the products");
              setIsLoading(false);
            }
          };
      
          fetchPost();
        },[userId]);
        return { posts, isLoading, error };
};
