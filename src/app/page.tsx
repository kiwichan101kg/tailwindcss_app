import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col place-items-center py-12 max-w-4xl mx-auto gap-y-4">
      <h1 className="text-8xl text-center w-full">
        Your team's go-to for
        <br /> instant answers.
      </h1>
      <p className="text-2xl text-center w-full leading-normal">
        Slite's AI-powered knowledge base is the fastest way to access trusted
        company information. From onboarding guides to all-hands notes — just
        ask Slite for it.
      </p>
    </div>
  );
}
