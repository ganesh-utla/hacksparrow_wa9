'use client'

import React, { useState } from "react";
import "../instructor/becomeInstructor.css";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import { useRouter } from "next/navigation";

function Plans({ Price, id, isUser }) {

    const navigate = useRouter();

    const [regularPrice, setRegularPrice] = useState(Price);
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');

    const handleUpdatePrice = (price) => {
        fetch(`/api/plans`, {
            method: 'POST',
            body: JSON.stringify(price),
            headers: {
                'Content-Type': 'application/json'
            }
        })

    }

    return (
        <>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <DialogTitle>
                    {'Individual Price'}
                </DialogTitle>
                <DialogContent>
                    <div className="w-[400px]">
                        <div className="flex gap-4 items-center">
                            <p className="text-3xl font-medium">₹</p>
                            <input
                                type="number"
                                required
                                className="mb-3 py-3 relative block w-full appearance-none rounded-md border border-gray-300 px-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                                placeholder={''}
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                        <button className="w-full py-3 text-white bg-blue-500 rounded-lg" onClick={() => {
                            setRegularPrice(value)
                            setIsOpen(false);
                            handleUpdatePrice({ id: id, price: value })
                        }}>
                            Save
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
            <div className="w-full md:w-2/3 flex gap-6 items-center mx-auto">
                <div className="w-[400px] shadow-lg p-5 rounded-lg border-t-4 border-green-400 bg-white">
                    <div className="flex items-center gap-5">
                        <p className="uppercase text-sm font-medium text-gray-500">
                            Individual Plan
                        </p>
                        {isUser == 'Instructor' &&
                            <button onClick={() => { setIsOpen(true); setValue(regularPrice) }}>
                                <Edit className="p-1 bg-blue-500 active:bg-blue-600 rounded-lg text-white" />
                            </button>
                        }
                    </div>

                    <h2 className="mt-4 text-4xl text-gray-700 font-medium">₹ {regularPrice}</h2>

                    <p className="mt-4 font-medium text-gray-700">
                        Recommended Best for your learning growth
                    </p>

                    <div className="mt-8">
                        <ul className="grid grid-cols-1 gap-4">
                            <li className="inline-flex items-center text-gray-600">
                                <svg
                                    className="w-4 h-4 mr-2 fill-current text-green-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Flexible Scheduling
                            </li>

                            <li className="inline-flex items-center text-gray-600">
                                <svg
                                    className="w-4 h-4 mr-2 fill-current text-green-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Dedicated Instructor
                            </li>

                            <li className="inline-flex items-center text-gray-600">
                                <svg
                                    className="w-4 h-4 mr-2 fill-current text-green-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Customized Curriculum
                            </li>

                            <li className="inline-flex items-center text-gray-600">
                                <svg
                                    className="w-4 h-4 mr-2 fill-current text-green-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Personalized Attention
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <button className="bg-slate-500 hover:bg-slate-600 px-3 py-2 rounded-lg w-full text-white"
                            onClick={() => {
                                isUser ? (
                                    navigate.push('/checkout'),
                                    localStorage.setItem("price", regularPrice),
                                    localStorage.setItem("plan", 1),
                                    localStorage.setItem("id", id)) : (alert('Please login to continue'))
                            }
                            }
                        >
                            Buy now
                        </button>
                    </div>
                </div>
                <div className="w-[450px] shadow-lg p-5 rounded-lg border-t-4 border-green-400 bg-white py-8">
                    <div className="flex items-center gap-5">
                        <p className="uppercase text-sm font-medium text-gray-500">Group Plan</p>
                    </div>

                    <h2 className="mt-4 text-4xl text-gray-700 font-medium">
                        ₹ {Math.round(regularPrice / 3)} <span className="text-base font-normal">(Super Saver)</span>
                    </h2>

                    <p className="mt-4 font-medium text-gray-700">
                        Joined on a group of 5 students.
                    </p>

                    <div className="mt-8">
                        <ul className="grid grid-cols-1 gap-4">
                            <li className="inline-flex items-center text-gray-600">
                                <svg
                                    className="w-4 h-4 mr-2 fill-current text-green-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Discounted Pricing
                            </li>

                            <li className="inline-flex items-center text-gray-600">
                                <svg
                                    className="w-4 h-4 mr-2 fill-current text-green-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Collaborative Learning Environment
                            </li>

                            <li className="inline-flex items-center text-gray-600">
                                <svg
                                    className="w-4 h-4 mr-2 fill-current text-green-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Cost-Effective Option
                            </li>

                            <li className="inline-flex items-center text-gray-600">
                                <svg
                                    className="w-4 h-4 mr-2 fill-current text-green-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                                </svg>
                                Networking Opportunities:
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <button className="bg-blue-400 hover:bg-blue-500 px-3 py-2 rounded-lg w-full text-white"
                            onClick={() => {
                                isUser ? (
                                    navigate.push('/checkout'),
                                    localStorage.setItem("price", regularPrice),
                                    localStorage.setItem("plan", 5),
                                    localStorage.setItem("id", id)
                                ) : (alert('Please login to continue'))
                            }
                            }
                        >
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Plans;
