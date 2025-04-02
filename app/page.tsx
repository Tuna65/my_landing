import Image from "next/image";

export default function Home() {
  return (
    <div className="py-4">
      <div className="relative w-full h-[500px]">
        <Image
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/VN-vi-20250324-TRIFECTA-perspective_c13ec8a3-2840-446a-8f47-0de805762986_large.jpg"
          alt="Banner"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
