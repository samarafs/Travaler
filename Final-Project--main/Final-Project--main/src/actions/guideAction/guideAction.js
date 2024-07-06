"use server";

export async function getGuides() {
  let response = await fetch("http://localhost:8084/api/v1/users/me/guide", {
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
/*export async function getGuidesId(id) {
  let response = await fetch(
    `http://localhost:8084/api/v1/users/me/guide/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let data = await response.json();
  return data;
}*/
