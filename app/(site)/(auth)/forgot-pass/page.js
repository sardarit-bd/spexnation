"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../../../components/Loading";

export default function SignInPage() {

    const router = useRouter();
    const [loading, setloading] = useState(false);
    const [step, setstep] = useState(1);
    const [email, setemail] = useState('');
    const [otp, setotp] = useState('');
    const [password, setpassword] = useState('');
    const [conpassword, setconpassword] = useState('');



    const handleSubmite = async (e) => {
        e.preventDefault();
        step == 1 ? SendOPTfunction() : step == 2 ? VerifyOPTfunction() : ResetPasswordfunction();
    };




    async function SendOPTfunction() {

        if (!email) {
            toast.error("Please Enter Email");
            return;
        }

        setloading(true);
        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/forgotpass`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        });

        const res = await response.json();

        if (res.success) {
            toast.success(res.message);
            setstep(2);
        } else {
            toast.error(res.message);
        }

        setloading(false);

    }




    async function VerifyOPTfunction() {


        if (!otp) {
            toast.error("Please Enter OTP");
            return;
        }


        setloading(true);
        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/verifyotp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, otp: otp }),
        });

        const res = await response.json();

        if (res.success) {
            toast.success(res.message);
            setstep(3);
        } else {
            toast.error(res.message);
        }

        setloading(false);


    }


    async function ResetPasswordfunction() {


        if (password !== conpassword) {
            toast.error("Password and confirm password doesn't match");
            return;
        }

        setloading(true);

        // Make API call to add the product
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/changepassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        });

        const res = await response.json();

        if (res.success) {
            toast.success(res.message);
            setstep(3);
        } else {
            toast.error(res.message);
        }

        setloading(false);

    }





    return (
        <section className="h-fit bg-gray-50 flex items-center justify-center px-4 py-4 md:py-8 lg:py-14">
            <div className="max-w-lg w-full bg-white shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-1">


                {/* Right Form Section */}
                <div className="p-10">
                    <h3 className="text-2xl font-light text-gray-800 mb-6">
                        {
                            step === 1 && ("Forgot Password")
                        }

                        {
                            step === 2 && ("Verify OTP")
                        }

                        {
                            step === 3 && ("Reset Password")
                        }
                    </h3>

                    <form onSubmit={(e) => { handleSubmite(e) }} className="space-y-5">


                        {
                            step === 1 && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => { setemail(e.target.value) }}
                                        required
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            )
                        }



                        {
                            step === 2 && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">
                                        OTP
                                    </label>
                                    <input
                                        type="number"
                                        name="otp"
                                        value={otp}
                                        onChange={(e) => {
                                            setotp(e.target.value)
                                        }}
                                        required
                                        className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                        placeholder="**********"
                                    />
                                </div>
                            )
                        }



                        {
                            step === 3 && (
                                <div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600 mb-1">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => {
                                                setpassword(e.target.value)
                                            }}
                                            required
                                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                            placeholder="**********"
                                        />


                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-gray-600 mb-1">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            name="conpassword"
                                            value={conpassword}
                                            onChange={(e) => { setconpassword(e.target.value) }}
                                            required
                                            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                            placeholder="**********"
                                        />


                                    </div>
                                </div>
                            )
                        }







                        <button
                            type="submit"
                            className="w-full pBg text-white font-medium py-3 rounded-lg flex items-center justify-center transition duration-300"
                        >


                            {
                                loading ? (
                                    <Loading />
                                ) : (
                                    <span>
                                        {
                                            step === 1 && "Send OTP"
                                        }
                                        {
                                            step === 2 && "Verify"
                                        }
                                        {
                                            step === 3 && "Update Password"
                                        }
                                    </span>
                                )
                            }
                        </button>
                    </form>
                </div>
            </div >
            <Toaster />
        </section >
    );
}
