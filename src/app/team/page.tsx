import Polaroid from "@/components/ui/polaroid";

export default function Team() {
  return (
    <div className="flex min-h-[90vh] items-center justify-center p-8">
      <Polaroid
        src="/team.webp"
        alt="Team member"
        width={400}
        height={400}
        text="THE BOARD"
      />
    </div>
  );
}
