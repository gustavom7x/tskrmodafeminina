import logo from "@/assets/logo-tskr.jpeg";

const Header = () => {
  return (
    <header className="bg-background py-6 md:py-10">
      <div className="container mx-auto flex flex-col items-center px-4">
        <img
          src={logo}
          alt="TSKR Moda Feminina"
          className="h-28 w-28 rounded-full object-cover shadow-lg md:h-36 md:w-36"
        />
        <p className="mt-4 font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Moda Feminina
        </p>
      </div>
    </header>
  );
};

export default Header;
