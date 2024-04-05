export default function Loading() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-semibold my-8">Loading</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className="max-h-40 my-8"
      >
        <circle
          fill="%23091C30"
          stroke="%23091C30"
          strokeWidth="27"
          r="15"
          cx="40"
          cy="100"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2.8"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          />
        </circle>
        <circle
          fill="%23091C30"
          stroke="%23091C30"
          strokeWidth="27"
          r="15"
          cx="100"
          cy="100"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2.8"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          />
        </circle>
        <circle
          fill="%23091C30"
          stroke="%23091C30"
          strokeWidth="27"
          r="15"
          cx="160"
          cy="100"
        >
          <animate
            attributeName="opacity"
            calcMode="spline"
            dur="2.8"
            values="1;0;1;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          />
        </circle>
      </svg>
    </div>
  );
}

// export default function Loading() {
//   return (
//     <div className="flex flex-col ">
//       <h1 className="text-3xl font-semibold my-8">Loading...</h1>
//       <img
//         src="../../public/fade-stagger-circles.svg"
//         alt=""
//         className="max-h-40 my-8"
//       />
//       url(
//   'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="%23091C30" stroke="%23091C30" stroke-width="27" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="%23091C30" stroke="%23091C30" stroke-width="27" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="%23091C30" stroke="%23091C30" stroke-width="27" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>'
// );
//     </div>
//   );
// }

// url(
//   'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="%23091C30" stroke="%23091C30" stroke-width="27" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="%23091C30" stroke="%23091C30" stroke-width="27" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="%23091C30" stroke="%23091C30" stroke-width="27" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>'
// );
