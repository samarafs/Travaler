"use server";

export async function getNormalUser() {
  let response = await fetch("http://localhost:8084/api/v1/users/normalUsers", {
    cache: "no-store",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();
  console.log(data.data);
  return data;
}
