import React from 'react';
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";

function ForgatPasswordModal({show,close}) {

    return (
        <Modal backdrop={"blur"} isOpen={show} onClose={close} placement={"center"}
               classNames={{
            body: "py-6",
            backdrop: "bg-gray-900/50 backdrop-opacity-70",
            base: "bg-gray-900 text-white",
            header: "border-b-[1px] border-[#292f46]",
            footer: " border-[#292f46]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
        }} >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex  items-center  gap-x-3"><span
                            className={"font-black"}>:(</span> Forgot Password </ModalHeader>
                        <ModalBody className="text-start ">
                            <p>
                                Please send a mail to  `&quot;`<span
                                className="underline">caneraydemir07@hotmail.com</span>  `&quot;` with your user
                                information.
                            </p>
                            <p className={"text-center font-semibold text-xl"}>( Kullanıcı adı : admin , şifre : admin123 )</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>

                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}

export default ForgatPasswordModal;