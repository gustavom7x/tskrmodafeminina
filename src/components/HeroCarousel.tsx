import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import product1 from "@/assets/product-1.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";
import product7 from "@/assets/product-7.jpeg";
import product9 from "@/assets/product-9.jpeg";

const slides = [
  { src: product1, alt: "Vestido rosa com recortes" },
  { src: product3, alt: "Vestido amarelo com babados" },
  { src: product4, alt: "Vestido branco com babados" },
  { src: product7, alt: "Macacão marrom elegante" },
  { src: product9, alt: "Conjunto marrom com babados" },
];

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative w-full bg-foreground py-8 md:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-[0_0_80%] min-w-0 px-2 md:flex-[0_0_50%] md:px-4"
              >
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-primary/80 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary md:left-6"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary/80 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary md:right-6"
          aria-label="Próximo"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/30"
              }`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
