import React, { useState } from "react";

const CommentTab = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: "Dino Melaye",
            action: "Added a comment",
            time: "5 hours ago",
            content:
                "I'm having troubles locating the customer on our search engine, did he/she happen to provide an email address? Thanks.",
            replies: [
                {
                    id: 11,
                    author: "You",
                    action: "replied this comment",
                    time: "5 hours ago",
                    content: "Yes he did, his email is tundebakare@gmail.com",
                },
            ],
        },
    ]);

    const [newComment, setNewComment] = useState("");

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            const newId = comments.length + 1;
            const newCommentObj = {
                id: newId,
                author: "You",
                action: "Added a comment",
                time: "Just now",
                content: newComment,
                replies: [],
            };
            setComments([newCommentObj, ...comments]);
            setNewComment("");
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Add a comment..</h1>

            <div className="space-y-6">
                {comments.map((comment) => (
                    <div key={comment.id}>
                        {/* Main Comment */}
                        <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0">
                                <img src="Avataraang.svg" alt="" />
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="font-semibold">
                                            {comment.author}
                                        </span>{" "}
                                        <span className="text-gray-500">
                                            {comment.action}
                                        </span>
                                    </div>
                                    <span className="text-sm text-gray-400">
                                        {comment.time}
                                    </span>
                                </div>
                                <p className="mt-2 p-4 bg-gray-100 rounded-md text-gray-700">
                                    {comment.content}
                                </p>
                                <button className="text-sm text-blue-500 hover:underline mt-1">
                                    Reply
                                </button>
                            </div>
                        </div>

                        {/* Replies */}
                        <div className="ml-12 mt-4 space-y-4">
                            {comment.replies.map((reply) => (
                                <div
                                    key={reply.id}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="w-10 h-10 rounded-full bg-blue-300 flex-shrink-0">
                                        <img src="Avataraang.svg" alt="" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <span className="font-semibold">
                                                    {reply.author}
                                                </span>{" "}
                                                <span className="text-gray-500">
                                                    {reply.action}
                                                </span>
                                            </div>
                                            <span className="text-sm text-gray-400">
                                                {reply.time}
                                            </span>
                                        </div>
                                        <p className="mt-2 p-4 bg-gray-100 rounded-md text-gray-700">
                                            {reply.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* New Comment Input */}
            <div className="mt-6">
                <textarea
                    className="w-full border rounded-md p-4 bg-gray-100"
                    rows="4"
                    placeholder="Type something here so others would see"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <div className="flex justify-end mt-2">
                    <button
                        className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
                        onClick={handleCommentSubmit}
                    >
                        Send comment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentTab;
