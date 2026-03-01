import logo from "@/assets/logo-tskr.jpeg";

const Header = () => {
  return (
    <header className="bg-background py-6">
      <div className="container mx-auto flex items-center justify-center gap-4 px-4">
        <img
          src={logo}
          alt="TSKR Moda Feminina"
          className="h-16 w-16 rounded-full object-cover shadow-md md:h-20 md:w-20"
        />
        <div>
          <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            TSKR
          </h1>
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Moda Feminina
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
