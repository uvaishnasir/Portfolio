import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-800">
            <div className="container-custom">
                <div className="text-center text-gray-500 text-sm">
                    <p>Design & Developed by Mohd Uvaish © {new Date().getFullYear()}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
