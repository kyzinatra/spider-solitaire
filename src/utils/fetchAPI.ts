export function postFetch(endpoint: string, body: { [key: string]: any }, token?: string) {
  return fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token || "",
    },
    method: "POST",
    redirect: "follow",
    credentials: "same-origin",
    body: JSON.stringify(body),
  });
}
