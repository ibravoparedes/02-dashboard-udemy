import { redirect } from "next/navigation";

export default function Home() {
  
  redirect('dashboard/main');

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white"> Hola Mundo </h1>
      </main>
    </div>
  );
}
