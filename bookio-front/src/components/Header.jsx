

import { useAuth } from "react-oidc-context";
import React from 'react';



function Header() {
    const auth = useAuth();

    const signOutRedirect = async () => {
        await auth.removeUser()
        const clientId = "6qnushs7590vstg41al3k9ke6q";
        const logoutUri = "http://localhost:5173/";
        const cognitoDomain = "https://us-east-1kftxczgho.auth.us-east-1.amazoncognito.com";
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Encountering error... {auth.error.message}</div>;
    }



    return (
        <>
            <header className="bg-gray-800 text-white shadow-md">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-xl font-bold">
                        <a href="/" className="hover:text-gray-300">MyApp</a>
                    </div>

                    {/* Navigation Menu */}
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <a
                                    href="#home"
                                    className="hover:text-gray-300 transition-colors duration-200"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-gray-300 transition-colors duration-200"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="hover:text-gray-300 transition-colors duration-200"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-gray-300 transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Buttons */}
                    <div className="space-x-4">

                        {auth.isAuthenticated ?
                            <button
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-200"
                                onClick={() => signOutRedirect()}
                            >
                                logout
                            </button>
                            :
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200"
                                onClick={() => auth.signinRedirect()}
                            >
                                Login
                            </button>
                        }


                    </div>
                </div>
            </header>
        </>

    );
}

export default Header;