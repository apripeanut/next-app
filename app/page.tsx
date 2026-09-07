import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-amber-100">
      <img
        className="z-0"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2478585.jpg&f=1&nofb=1&ipt=3db8927fd5a65b0b9cc3e49fa56e14db5a7c597f06e3fc82230c6810f1ae11c2"
        alt="Beach Background"
      />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start absolute z-10">
        <h1 className="font-sans no-underline text-6xl">
          I am Jezcois Reuben Garganza!
        </h1>
        <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 border-4 rounded-4xl bg-amber-200 border-blue-950">
          <h1 className="text1">Enjoying the summer times!</h1>
          <h2 className="text2">
            Waving by the seaside with Hellos and Goodbyes!
          </h2>
        </div>
        <Image
          className="z-20"
          src="/image/profile2.jpg"
          alt="profile pic"
          width={960}
          height={944}
        />
      </main>
    </div>
  );
}
