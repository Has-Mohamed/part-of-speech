
export const  studentRank = async(final_score) => {
  let bodyContent = JSON.stringify({
    "final_score":final_score
  });
  
  return await fetch("http://localhost:4000/rank", {
    method:"POST",
    body:bodyContent,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};
