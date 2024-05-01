import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Blogs = () => {
  // Sample data for demonstration
  const blogs = [
    {
      id: 1,
      title: "Living room Sofa",
      description:
        "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
      imageUrl:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 2,
      title: "Another Sofa. ",
      description:
        "Another sofa. This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
      imageUrl: "https://via.placeholder.com/250", // Placeholder image
    },
  ];

  return (
    <div>
      <NavBar />
      <Heading className=" text-center ">Blogs or whatever</Heading>

      <div className="p-10">
        <div className="flex flex-col gap-5">
          {blogs.map((blog) => (
            <Card key={blog.id} className="border-3 shadow">
              <CardBody className="flex gap-5">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  borderRadius="lg"
                  width={200}
                />
                <Stack px={3} mt={7} spacing="3">
                  <Heading size="md">{blog.title}</Heading>
                  <Text>{blog.description}</Text>
                  <div className="flex justify-end mr-2 mb-2">
                    <Link to={`/blog/${blog.id}`}>
                      <Button variant="solid" colorScheme="blue">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
