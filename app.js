
// Fetch single post from API and print title & body

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json()) // Convert response to JSON
  .then(data => {
    console.log("Title:", data.title);
    console.log("Body:", data.body);
  })
  .catch(error => console.log("Error:", error));

// Convert JSON string to JS object and print formatted message

let jsonData = '{"city":"Noida","weather":"Sunny","temp":30}';
let obj = JSON.parse(jsonData); // JSON string → JS object

console.log(`Weather in ${obj.city} is ${obj.weather} and ${obj.temp}°C`);

// Print object in console form
console.log(obj);

// Fetch users list from API and access first user details

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    console.log("First User Name:", data[0].name);
    console.log("First User Email:", data[0].email);
    console.log("All Users:", data);
  })
  .catch(error => console.log("Error:", error));

// Send POST request to API with sample data

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Learning API",
    body: "Ashish is practicing POST request",
    userId: 1
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(res => res.json())
  .then(data => console.log("Server Response:", data))
  .catch(err => console.log("Error:", err));

// Async/Await GET & POST request examples

// GET example
async function fetchFirstUser() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log("First User Name (Async):", data[0].name);
  } catch (error) {
    console.log("Error:", error);
  }
}
fetchFirstUser();

// POST example
async function sendPostData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Learning API",
        body: "Ashish is practicing Async/Await POST",
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    let data = await res.json();
    console.log("Server Response (Async):", data);
  } catch (error) {
    console.log("Error:", error);
  }
}
sendPostData();

