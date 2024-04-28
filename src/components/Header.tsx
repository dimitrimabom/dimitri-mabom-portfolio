import { ModeToggle } from "./ModeToggle";
import { Section } from "./Section";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-background">
      <Section className="flex items-baseline border-b-2 py-4">
        <a href="#">
          <h1 className="text-xl font-bold text-foreground">{"<DM />"}</h1>
        </a>
        <div className="flex-1"></div>
        <ul className="flex flex-row gap-2 justify-center items-center">
          <ModeToggle />
          <Avatar className="size-9 flex items-center">
            <AvatarImage
              className="rounded-3xl"
              src="https://firebasestorage.googleapis.com/v0/b/stock-media-301c1.appspot.com/o/images%2FMoi.jpg?alt=media&token=2cbfbe30-5027-4695-a9d3-9c535dc849ee"
              alt="Moi"
            />
            <AvatarFallback className="rounded-3xl bg-accent p-4 w-full h-full flex items-center justify-center">
              DM
            </AvatarFallback>
          </Avatar>
        </ul>
      </Section>
    </header>
  );
};
