import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

interface ISignOutModal {
  show: boolean;
  close: () => void;
}

function SignOutModal({ show, close }: ISignOutModal) {
  const cookies = new Cookies();
  const router = useRouter();

  const username = cookies.get("username");
  const logout = async () => {
    const res = await fetch(`/api/logout`, { method: "POST" });

    const data = await res.json();
    if (data.state === true) {
      close();
      router.push("/");
    }
  };
  return (
    <Modal
      size={"sm"}
      isOpen={show}
      onClose={close}
      backdrop={"blur"}
      placement={"center"}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 font-extrabold text-red-600">
              Logout
            </ModalHeader>
            <ModalBody>
              <p className="text-lg font-bold text-center">
                Dear {username?.toUpperCase()} ,are you sure you want to{" "}
                <span className="text-red-600">logout</span>?
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                className={" font-semibold"}
                color="success"
                variant="light"
                onPress={logout}
              >
                Yes
              </Button>
              <Button
                className={"text-red-600 font-semibold"}
                variant="light"
                onPress={onClose}
              >
                Cancel
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default SignOutModal;
