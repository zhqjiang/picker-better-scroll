import { useState } from "react";
import CancelSetDrawer from "../drawer";
import Picker from "../picker-old/index";
import Button from "@material-ui/core/Button";

const PickerWithMUI = () => {
  const [visible, setVisible] = useState(false);
  const [selectedText, setSelectedText] = useState("open");

  const handleOk = () => {
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        {selectedText}
      </Button>
      <CancelSetDrawer
        visible={visible}
        className="src-app-components-option-notes"
        handleOk={handleOk}
        handleClose={handleClose}
        hideCancelSetBtnGroup={true}
      >
        <Picker
          selectedText={selectedText}
          setSelectedText={setSelectedText}
          visible={visible}
          setVisible={setVisible}
        />
      </CancelSetDrawer>
    </>
  );
};

export default PickerWithMUI;
