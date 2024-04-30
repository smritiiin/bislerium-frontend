import { useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="bg-[#e1e8ff] min-h-screen p-10">
      <div className="grid grid-cols-2 h-full overflow-hidden shadow-lg rounded-xl">
        {/* Image div on the right */}
        <div className="h-full mb-1">
          <img
            src="/src/assets/coverimage.jpg"
            alt="background cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-12 bg-blue-50">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-purple-800">
              Bislerium
            </h1>
            <h1 className="text-2xl font-normal">Welcome</h1>
          </div>

          {/* Signup form */}
          <div className="text-center mt-8">
            <form>
              <Stack spacing={2}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                    fontSize="1.2em"
                  >
                    <FaUserAlt size={20} />
                  </InputLeftElement>
                  <Input type="text" placeholder="Full Name" />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                    fontSize="1.2em"
                  >
                    <MdEmail size={20} />
                  </InputLeftElement>
                  <Input type="email" placeholder="Email" />
                </InputGroup>
                <InputGroup size="md">
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.500"
                    fontSize="1.2em"
                  >
                    <RiLockPasswordFill />
                  </InputLeftElement>
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={handleClick}
                      color="gray.500"
                    >
                      {show ? (
                        <FaEyeSlash size="1.3rem" />
                      ) : (
                        <FaEye size="1.3em" />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Stack>
              {/* Sign in button */}
              <div className="flex justify-center mt-8">
                <Button type="submit" colorScheme="blue">
                  Signup
                </Button>
              </div>
            </form>

            <div className="flex items-center justify-center mt-16 pb-4">
              <p className="mr-1">Already have an account?</p>
              <Link to="/login" className="text-blue-500 font-semibold">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
