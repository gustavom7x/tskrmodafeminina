import { Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-foreground py-16 md:py-24">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h2 className="mb-4 font-display text-3xl font-semibold text-primary-foreground md:text-4xl">
          Entre em Contato
        </h2>
        <p className="mb-10 font-body text-sm leading-relaxed text-primary-foreground/70 md:text-base">
          Para mais informações, maior variedade de peças e tamanhos, entre em contato conosco pelo Instagram.
        </p>

        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/use_tskr?igsh=MWpqNGg0c25iYjZxMw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-8 py-4 font-body text-sm font-medium text-primary-foreground transition-all hover:bg-rose-dark"
          >
            <Instagram className="h-5 w-5" />
            @use_tskr
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
