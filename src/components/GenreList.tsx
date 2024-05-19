import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  // const { data: genres, error, isLoading } = useData<Genre>("/genres");
  const { data: genres, error, isLoading } = useGenres();

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY="5px">
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
