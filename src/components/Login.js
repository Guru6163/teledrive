import React, { useState } from "react";

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState("");

    const handleGetOtp = (e) => {
        e.preventDefault();
        setOtp(true);
        // Add logic to send OTP to the given phone number
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        // Add logic to verify the given OTP
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome back!</h2>
                {!otp ? (
                    <form onSubmit={handleGetOtp}>
                        <div className="mb-4 flex items-center">
                            <label
                                className="block text-gray-700 font-bold mr-2"
                                htmlFor="phoneNumber"
                            >
                                Phone Number
                            </label>
                            <input
                                className="w-full bg-gray-200 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                                type="text"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                            type="submit"
                        >
                            Get OTP
                        </button>
                        <p className="text-gray-500 text-center text-sm mt-4">
                            Want to go back?{" "}
                            <button className="underline" onClick={() => setPhoneNumber("")}>
                                Change number
                            </button>
                        </p>
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOtp}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="otp"
                            >
                                OTP
                            </label>
                            <input
                                className="w-full bg-gray-200 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
                                type="text"
                                id="otp"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                            type="submit"
                        >
                            Verify OTP
                        </button>
                        <p className="text-gray-500 text-center text-sm mt-4">
                            Want to go back?{" "}
                            <button className="underline" onClick={() => setOtp("")}>
                                Change number
                            </button>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
