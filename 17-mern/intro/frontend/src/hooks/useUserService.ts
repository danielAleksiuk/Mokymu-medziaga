import { useState } from "react";
import type { User } from "../utils/types";

export const useUserSignup = () => {
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signUp = async (userData: User) => {
        const response = await fetch(
            'http://localhost:4000/api/user/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(userData)
        });

        const json = await response.json();

        if (json.error) {
            setError(json.error);
            return;
        }
        
        if (response.ok) {
            return json;
        }
        
    }


    return { signUp, isLoading, error };
}

export const useUserLogin = () => {
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const login = async (userData: User) => {
        const response = await fetch(
            'http://localhost:4000/api/user/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(userData)
        });

        const json = await response.json();

        if (json.error) {
            setError(json.error);
            return;
        }
        
        if (response.ok) {
            return json;
        }
        
    }


    return { login, isLoading, error };
}
