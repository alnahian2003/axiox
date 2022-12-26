/* List of Interesting Public APIs
    - https://official-joke-api.appspot.com/random_joke
    - https://www.boredapi.com/api/activity
    - https://randomuser.me/api/
    - https://jsonplaceholder.typicode.com/posts
 */

// Get random activity
let bored = axios
  .get("https://www.boredapi.com/api/activity")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.error(err);
  });

// Creating a Resource
axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.error(err);
  });

// Update a Resource
axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify({
      id: 1,
      title: "Updated Title for This Resource",
      userId: 1,
    }),
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.error(err);
  });

// Delete a Resource
axios
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
