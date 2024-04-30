import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const ChangePassword = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="bg-[#e1e8ff] min-h-screen px-48 py-20">
      <div className=" h-full overflow-hidden shadow-lg rounded-xl">
        <div className="p-12 bg-blue-50">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-purple-800">
              Change Password
            </h1>
            <p className="mt-2 font-sans text-gray-600">
              Enter a new password below to change your password
            </p>
          </div>
          {/* Form */}
          <div className="text-center mt-8">
            <div className="flex items-center justify-center mt-16 pb-4">
              <Stack spacing={4}>
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
                    placeholder="New password"
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
                    placeholder="Confirm Password"
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

                <div className="flex justify-center mt-8">
                  <Button type="submit" colorScheme="blue">
                    Change Password
                  </Button>
                </div>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
