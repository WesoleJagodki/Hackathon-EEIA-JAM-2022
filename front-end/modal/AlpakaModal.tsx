import React from "react-native";
import { Image, Modal, Button, Center,Text } from "native-base";
import {alpaka_modal} from "./ModalStyle";

interface Props {
    showModal : boolean,
    popupData : any,
    setShowModal : any
}

export const AlpakaModal = function ({showModal, popupData, setShowModal} : Props): JSX.Element {
    return(
            <Modal isOpen={showModal}>
                <Modal.Content maxWidth="400px" style={alpaka_modal.modal}>
                    <Center>
                        <Image style={alpaka_modal.image} source={popupData.img} alt={popupData.title}></Image>
                        <Modal.Body>
                            <Text style={alpaka_modal.header}>{popupData.title}</Text>
                            <Text style={alpaka_modal.text}>{popupData.description}</Text>
                        </Modal.Body>
                        <Button style={alpaka_modal.button} onPress={() => { setShowModal(false); }}>
                            <Text style={alpaka_modal.button_text}>Complited</Text>
                        </Button>
                    </Center>
                </Modal.Content>
            </Modal>
    )
}