export const revalidate = 1;
export const dynamic = "force-dynamic";
async function getData() {
  const response = await fetch(process.env.URL + "/api", {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      method: "GET",
    },
  });

  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Home() {
  // const {
  //   username,
  //   handle,
  //   email,
  //   followers,
  //   following,
  //   posts,
  //   likes,
  //   chatRooms,
  //   messages,
  // } = await getData();
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Username: {data?.username}</h1>
      <h1>Handle: {data?.handle}</h1>
      <h1>Email: {data?.email}</h1>
    </main>
  );
}
