import { SectionShell } from "@/components/layout/section-shell";

type AmenityDetailPageProps = {
  params: Promise<{
    amenityId: string;
  }>;
};

export default async function AmenityDetailPage({
  params,
}: AmenityDetailPageProps) {
  const { amenityId } = await params;

  return (
    <SectionShell
      eyebrow="Resident"
      title={`Amenity ${amenityId}`}
      description="Amenity detail, availability, and booking submission will be implemented here."
    />
  );
}
