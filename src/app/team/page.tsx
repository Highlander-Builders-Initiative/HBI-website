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

      <p className="font-sf mt-6 text-lg">
        Our founding team is what made this organization possible.
      </p>
      <p className="font-sf -mt-0.5 text-lg">
        We&apos;re here to help you on your journey on building.
      </p>
    </div>
  );
}
