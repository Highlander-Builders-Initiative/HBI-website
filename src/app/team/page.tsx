import Polaroid from "@/components/ui/polaroid";

export default function Team() {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center p-8">
      <Polaroid
        src="/team.webp"
        alt="Team member"
        width={400}
        height={400}
        text="THE BOARD"
      />

      <div className="hidden sm:block">
        <p className="font-sf mt-6 text-lg">
          Our founding team is what made this organization possible.
        </p>
        <p className="font-sf -mt-0.5 text-lg">
          We&apos;re here to help you on your building journey.
        </p>
      </div>

      <div className="block sm:hidden">
        <p className="font-sf mt-6 text-center text-lg">
          This is our founding team.
        </p>
        <p className="font-sf -mt-0.5 text-lg">
          We&apos;re here to support your journey.
        </p>
      </div>
    </div>
  );
}
