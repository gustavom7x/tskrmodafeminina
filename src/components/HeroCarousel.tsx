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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative w-full bg-foreground py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-12 md:px-16">
        <div className="overflow-hidden rounded-md" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] min-w-0 px-2 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div className="overflow-hidden rounded-md shadow-lg">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2.5 text-foreground shadow-md transition-colors hover:bg-primary hover:text-primary-foreground md:left-3"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-background/90 p-2.5 text-foreground shadow-md transition-colors hover:bg-primary hover:text-primary-foreground md:right-3"
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
