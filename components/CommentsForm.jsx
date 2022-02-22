import e from "express";
import React, { useState, useEffect, useRef } from 'react'

const CommentsForm = ({ slug }) => {
    const [ error, setError ] = useState(false);
    const [ localStorage, setLocalStorage ] = useState(null);
    const [ showSuccessMessage, setShowSuccessMessage ] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    const handleCommentSubmission = () => {
        setError(false);

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;

        if(!comment || !name || !email) {
            setError(true);
            return;
        }

        const commentObj = { name, email, comment, slug };

        if(storeData) {
            localStorage.setItem("name", name);
            localStorage.setItem("name", name);
        } else {
            localStorage.removeItem("name", name);
            localStorage.removeItem("email", email);

        }

    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                Comments
            </h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea 
                    ref={commentEl} 
                    name="Comment" 
                    id="" 
                    cols="30" 
                    rows="10"
                    className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    placeholder="Comment"
                />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
                <input 
                    type="text" 
                    ref={nameEl}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    name="Name" 
                    placeholder="Name"
                />
                <input 
                    type="text" 
                    ref={emailEl}
                    className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                    name="Email" 
                    placeholder="Email"
                />
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="">
                    <input ref={storeDataEl.el} type="checkbox" id="storeData" name="storeDate" value="true" />
                    <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData"> Save my e-mail and name for the next time I comment </label>
                </div>
            </div>
            {error && <p className="text-xs text-red-500">All fields are required.</p>}
            <div className="mt-8">
                <button 
                    type="button" 
                    onClick={handleCommentSubmission}
                    className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
                >
                    Post comment
                </button>
                {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500"> Comment submitted for review </span>}
            </div>
        </div>
    )
}

export default CommentsForm