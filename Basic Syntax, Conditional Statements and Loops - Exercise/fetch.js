let data = { element: "barium" };

fetch("/post/data/here", {
  method: "POST",
  body: JSON.stringify(data),
}).then((res) => {
  console.log("Request complete! response:", res);
});
