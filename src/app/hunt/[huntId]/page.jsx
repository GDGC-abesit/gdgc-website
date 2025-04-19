"use client"
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import QRCode from "react-qr-code";

const Page = () => {
    const urls = [
        "https://drive.google.com/drive/folders/1X0OrrJz2G101BZHyBlqc4ZlyXgOf51VC?usp=sharing",
        "https://drive.google.com/drive/folders/1NYzqmQ3So5qbF7ZVChbcKN0oPiNdv6_s?usp=sharing",
        "https://drive.google.com/drive/folders/1CtlFXmUi9Xt9x01_GoycENv-dzkBzn3d?usp=sharing",
        "https://drive.google.com/drive/folders/1kIk-XSEzB5tX-ATrP4tVuVMZ6TQLbVpT?usp=sharing",
        "https://drive.google.com/drive/folders/1P8nGa6XX-eovHXVhVFjfZ_o8lZD-9J9S?usp=sharing",
        "https://drive.google.com/drive/folders/1gcG_VVWlj9qh8PQhe_UTWH6LkgSFWhEm?usp=sharing",
        "https://drive.google.com/drive/folders/1SpodZ5rr-94sy2xKBGbbz0voRRX08M0l?usp=sharing",
        "https://drive.google.com/drive/folders/1VSpwp7wthw1byR1ZFz9CwmebCrBAgO88?usp=sharing",
    ];

    const qrSize = 96;
    const buffer = 20;
    const centerRadius = 250;
    const navbarHeight = 120; // Corrected to match pt-20 (5rem = 80px)
    const huntID = String(process.env.NEXT_PUBLIC_HUNT_ID);
    const params = useParams()
    console.log(huntID)
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const calculatePositions = () => {
            const generatedPositions = [];
            const attemptsLimit = 100;
            const viewportWidth = document.documentElement.clientWidth;
            const viewportHeight = document.documentElement.clientHeight;

            const isOverlapping = (x, y, existingPositions) => {
                // Check against center protected area
                const centerX = viewportWidth / 2;
                const centerY = viewportHeight / 2;
                const distance = Math.sqrt(
                    Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
                );
                if (distance < centerRadius + qrSize / 2) return true;

                // Check against other QR codes
                return existingPositions.some(pos => {
                    return (
                        Math.abs(x - pos.x) < qrSize + buffer &&
                        Math.abs(y - pos.y) < qrSize + buffer
                    );
                });
            };

            for (let i = 0; i < 15; i++) {
                let validPosition = false;
                let attempts = 0;
                let x, y;

                while (!validPosition && attempts < attemptsLimit) {
                    x = Math.random() * (viewportWidth - qrSize);
                    y = navbarHeight + Math.random() * (viewportHeight - navbarHeight - qrSize - buffer);

                    validPosition = !isOverlapping(x, y, generatedPositions);
                    attempts++;
                }

                if (validPosition) {
                    generatedPositions.push({ x, y });
                }
            }

            setPositions(generatedPositions.map(pos => ({
                left: `${(pos.x / viewportWidth) * 100}%`,
                top: `${(pos.y / viewportHeight) * 100}%`
            })));
        };

        calculatePositions();
        window.addEventListener('resize', calculatePositions);
        return () => window.removeEventListener('resize', calculatePositions);
    }, []);

    if (params.huntId != huntID) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center bg-red-50">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full">
                        <svg
                            className="w-8 h-8 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-red-600">
                        Cheating Detected!
                    </h1>
                    <p className="text-red-500 max-w-md">
                        Unauthorized access detected. Please participate in the hunt through
                        legitimate channels to ensure fair play for all participants.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative h-screen w-full overflow-hidden bg-gray-100">
            {/* QR Codes */}
            {positions.map((position, index) => {
                const randomUrl = urls[Math.floor(Math.random() * urls.length)];
                return (
                    <div
                        key={index}
                        className="absolute w-24 h-24 transition-transform duration-300 hover:scale-125 hover:z-10"
                        style={{
                            left: position.left,
                            top: position.top,
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <QRCode
                            value={randomUrl}
                            bgColor="#ffffff"
                            fgColor="#000000"
                            size={qrSize}
                            className="w-full h-full p-1 bg-white rounded-lg shadow-xl"
                        />
                    </div>
                );
            })}

            {/* Central Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <Image
                    height={200}
                    width={200}
                    src="/Level 3 .png"
                    alt="Central Content"
                    className="w-64 h-64 object-cover shadow-2xl border-8 border-white animate-pulse"
                />
            </div>
        </div>
    );
};

export default Page;