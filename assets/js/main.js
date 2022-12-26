/* List of Interesting Public APIs
    - https://official-joke-api.appspot.com/random_joke
    - https://www.boredapi.com/api/activity
    - https://randomuser.me/api/
 */

let bored = axios
  .get("https://www.boredapi.com/api/activity")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
