// 'use client';

// export default function AIRecommendation() {
//   const { data, error } = useSWR('/api/ai/suggestions', fetcher, {
//     revalidateOnFocus: false,
//     onSuccess: (data) => {
//       localStorage.setItem('lastSuggestions', JSON.stringify(data));
//     }
//   });

//   return (
//     <div className="ai-panel">
//       <h3>Suggested Projects</h3>
//       <div className="suggestions-grid">
//         {data?.map((suggestion, index) => (
//           <AICard
//             key={index}
//             suggestion={suggestion}
//             onFeedback={(rating) => handleFeedback(rating)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
