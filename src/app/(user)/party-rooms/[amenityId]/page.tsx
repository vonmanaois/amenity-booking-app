import { SectionShell } from "@/components/layout/section-shell";

type PartyRoomDetailPageProps = {
  params: Promise<{
    amenityId: string;
  }>;
};

export default async function PartyRoomDetailPage({
  params,
}: PartyRoomDetailPageProps) {
  const { amenityId } = await params;

  return (
    <SectionShell
      eyebrow="Resident"
      title={`Party Room ${amenityId}`}
      description="Party room policies, event details, and stricter booking rules will surface here."
    />
  );
}
