import { getImageUrl } from "@/lib/utils/images";
import { Card, CardContent } from "./ui";

interface ListingCardProps {
  name: string;
  imageUrl: string;
}

const ListingCard = ({ name, imageUrl }: ListingCardProps) => {
  return (
    <Card className="w-[320px]">
      <img
        className="h-[200px] w-full rounded-md object-cover"
        src={getImageUrl(imageUrl)}
        alt={name}
      />
      <CardContent className="p-4">
        <h2 className="mb-0 text-xl font-semibold">{name}</h2>
      </CardContent>
    </Card>
  );
};

export default ListingCard;
