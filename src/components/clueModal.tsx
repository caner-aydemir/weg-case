import React from 'react';
import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";

function ClueModal({show,close}) {
    return (
        <Modal backdrop={"blur"}  isOpen={show} onClose={close} placement={"top"}

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
                        <ModalHeader className="flex  items-center justify-center  gap-x-3"> Hatırlatma !</ModalHeader>
                        <ModalBody className="text-center text-lg">
                            <p>Kullanıcı adı : <span className="font-bold">admin</span></p>
                            <p>Şifre : <span className="font-bold">admin123</span></p>
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

export default ClueModal;