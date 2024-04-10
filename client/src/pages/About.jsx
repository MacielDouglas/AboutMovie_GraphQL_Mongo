export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto mb-32">
      <h1 className="text-7xl text-center font-bold mb-10 text-cor_button font-lobster text-slate-400">
        About Movie
      </h1>
      <div className="text-xl flex flex-col gap-6 text-slate-300">
        <p>
          This software project was developed to apply my knowledge in software
          development.
        </p>
        <p>
          On the front-end, React.js was used in conjunction with Tailwind and
          Apollo Client. The back-end was built to utilize GraphQL, where users
          can query a MongoDB database for movie information.
        </p>
        <p>
          Additionally, users have the ability to add comments to movies, but
          must first register and log in to the page.
        </p>
        <p>I hope you enjoyed this project!</p>
      </div>
    </div>
  );
}
