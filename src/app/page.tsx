async function getData() {
  const response = await fetch("http://localhost:3000/api", {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      method: "GET",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data}
    </main>
  );
}
