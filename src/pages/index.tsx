import Head from "next/head";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen items-center justify-center">
        <div className="flex gap-4 bg-slate-800 p-5 rounded-md items-center text-white">
          <h1>Hello Ayoub</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </>
  );
}
