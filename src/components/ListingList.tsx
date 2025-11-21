import ListingCard from "./ListingCard";

const ListingList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <ListingCard name="Listing 1" imageUrl="/images/listing1.jpg" />
      <ListingCard name="Listing 2" imageUrl="/images/listing2.jpg" />
      <ListingCard name="Listing 3" imageUrl="/images/listing3.jpg" />
    </div>
  );
};
export default ListingList;
