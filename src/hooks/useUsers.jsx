import { useState, useEffect } from 'react';

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
            try {
              const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
              if (response.ok) {
                const userData = await response.json();
                console.log(userData);
                setUsers(userData);
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
      
          fetchUsers();
        },[]);
        return { users, isLoading, error };
};
