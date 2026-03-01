import { Instagram, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-foreground py-16 md:py-24">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        <h2 className="mb-4 font-display text-3xl font-semibold text-primary-foreground md:text-4xl">
          Entre em Contato
        </h2>
        <p className="mb-10 font-body text-sm leading-relaxed text-primary-foreground/70 md:text-base">
          Para mais informações, maior variedade de peças e tamanhos, entre em contato conosco pelo Instagram ou WhatsApp.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-3 rounded-sm bg-primary px-8 py-4 font-body text-sm font-medium text-primary-foreground transition-all hover:bg-rose-dark sm:w-auto"
          >
            <Instagram className="h-5 w-5" />
            Instagram
          </a>
          <a
            href="#"
            className="inline-flex w-full items-center justify-center gap-3 rounded-sm border border-primary/40 bg-transparent px-8 py-4 font-body text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
