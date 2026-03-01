import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product5 from "@/assets/product-5.jpeg";
import product6 from "@/assets/product-6.jpeg";
import product8 from "@/assets/product-8.jpeg";
import product9 from "@/assets/product-9.jpeg";

const products = [
  { src: product1, name: "Vestido Rosa Recortes" },
  { src: product2, name: "Tomara que Caia Floral" },
  { src: product5, name: "Conjunto Tropical Verde" },
  { src: product6, name: "Conjunto Risca de Giz" },
  { src: product8, name: "Conjunto Cargo Preto" },
  { src: product9, name: "Conjunto Babados Marrom" },
];

const ProductGrid = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Coleção em Destaque
        </h2>
        <p className="mb-12 text-center font-body text-muted-foreground">
          Peças exclusivas selecionadas para você
        </p>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="group animate-fade-in-up overflow-hidden rounded-sm bg-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={product.src}
                  alt={product.name}
                  className="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-border p-3 md:p-4">
                <h3 className="font-display text-sm font-medium text-foreground md:text-base">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-primary md:text-sm">
                  Consulte via WhatsApp
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
