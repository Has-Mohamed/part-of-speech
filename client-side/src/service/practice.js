
export const  fetchWordList = async() => {
  return await fetch("http://localhost:4000/words", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};
