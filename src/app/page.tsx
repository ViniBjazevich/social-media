export const dynamic = "force-dynamic";
async function getData() {
  const response = await fetch(process.env.URL + "/api", {
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

  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data}
    </main>
  );
}
