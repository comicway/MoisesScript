"use client";
import dynamic from "next/dynamic";

const LandingPaidMedia = dynamic(
  () => import("../../Components/LandingPages/LandingPaidMedia"),
  {
    ssr: false,
    loading: () => (
      <div className="container mx-auto mt-28 text-azulbrillante font-Oswald text-center">
        Cargando...
      </div>
    ),
  }
);

export default function LandingPaidMediaClient() {
  return <LandingPaidMedia />;
}
