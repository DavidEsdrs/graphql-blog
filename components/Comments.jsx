import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getComments } from "../services/getComments";
import { comment } from "postcss";

const Comments = ({ slug }) => {
    const [ comments, setComments ] = useState([]);

    useEffect(async () => {
        const comments = await getComments(slug);
        setComments(comments);
    }, [])
    

    return (
        <>
            {comment.length > 0 && (
                <div className="bg-white shadow-lg rounded-lg p-8 pb-12">
                    <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                        {comments.length}
                        {' '}
                        Comments
                    </h3>
                    {comments.map(comment => (
                        <div key={comment.ID} className="border border-gray-200 mb-4 p-4 rounded-lg">
                            <p className="mb-4">
                                <span className="font-semibold">{comment.name}</span>
                                {' '}
                                on
                                {' '}
                                {moment(comment.createdAt).format("MMM DD, YYYY")}
                            </p>
                            <p className="whitespace-pre-line text-gray-600 w-full">
                                {parse(comment.comment)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Comments