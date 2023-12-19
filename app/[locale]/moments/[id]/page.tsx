"use client";

export default function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="w-full h-[150vh] bg-green-950">
      <div className="w-full container h-[50vh]  flex justify-center items-center">
        Moment {id}
      </div>
    </div>
  );
}
