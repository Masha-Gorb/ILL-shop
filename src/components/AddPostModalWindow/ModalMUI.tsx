import React, {ReactElement} from 'react';
import Button from "@mui/material/Button/Button";
import {Box, Modal, Typography} from "@mui/material";

export const AddPostModal = () => {
    const [isModal, setModal] = React.useState(false)


    return (
        <div>
            <Button onClick={() => setModal(true)}>Open modal</Button>
            <Modal
                open={isModal}
                onClose={() => setModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

