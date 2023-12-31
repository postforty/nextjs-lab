import MyForm from "./_components/MyForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-2xl mb-5">react-hook-form test!</h1>
      <MyForm />
    </main>
  );
}
