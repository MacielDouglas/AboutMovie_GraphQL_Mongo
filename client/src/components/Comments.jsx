import { useState } from "react";
import { useQuery } from "@apollo/client";
import { COMMENTS } from "../graphql/queries/comment.query.js";

export default function Comments({ id, year }) {
  const [showMore, setShowMore] = useState(false);
  const [visibleComments, setVisibleComments] = useState(5);
  const { data, loading, error } = useQuery(COMMENTS, {
    variables: {
      commentId: id,
      year: year,
    },
  });

  if (loading) return <h1>Loading comments...</h1>;
  if (error)
    return <h1 className="text-2xl text-stone-200 my-4">No comments found</h1>;

  const { comment } = data;

  if (!comment || comment.length === 0) {
    return <h1>No comments found</h1>;
  }

  const showMoreComments = () => {
    setVisibleComments(visibleComments + 5);
  };

  return (
    <div>
      <h1 className="text-2xl text-stone-200 my-4">
        Comments: {comment ? comment.length : 0}
      </h1>
      <div>
        {comment.slice(0, visibleComments).map((com) => (
          <div key={com.name} className="mb-4 font-roboto text-stone-400">
            <p>{com.text}</p>
            <p className="mb-4 text-stone-500">
              {com.name} - {new Date(com.date).toLocaleDateString("en-US")}
            </p>
            <hr />
          </div>
        ))}
        {!showMore && comment.length > visibleComments && (
          <button onClick={showMoreComments} className="hover:text-slate-300">
            Show More
          </button>
        )}
      </div>
    </div>
  );
}
