import { Suspense } from "react";
import GallerySlider from "./Card";

export default function Carousel() {
  return (
    <section className="w-full bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Galeria
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Confira as imagens da galeria.
          </p>
          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-px w-44 bg-slate-200"
          />
        </header>

        <Suspense
          fallback={<div className="min-h-64" aria-busy="true" />}
        >
          <GallerySlider />
        </Suspense>
      </div>
    </section>
  );
}
