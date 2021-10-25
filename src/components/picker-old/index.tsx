import React, {
  FC,
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
// import { CSSTransition } from "react-transition-group";
import BScroll from "@better-scroll/core";
import Wheel from "@better-scroll/wheel";
import MouseWheel from "@better-scroll/mouse-wheel";
import { DATA1, DATA2, DATA3 } from "../exampleData";
import "./picker.scss";
import CancelSetBtnGroup from "../drawer/cancel-set-btn-group";
BScroll.use(Wheel);
BScroll.use(MouseWheel);

const pickerData = [DATA1, DATA2, DATA3];

interface IProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  selectedText: string;
  setSelectedText: Dispatch<SetStateAction<string>>;
}

const DoubleColumn: FC<IProps> = ({
  visible,
  setVisible,
  selectedText,
  setSelectedText,
}) => {
  const [selectedIndexPair, setSelectedIndexPair] = useState(
    new Array(pickerData.length).fill(0)
  );

  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<BScroll[]>([]);

  useEffect(() => {
    if (visible) {
      const createWheel = (wheelWrappers: HTMLElement[], i: number) => {
        if (scrollRef.current[i]) {
          scrollRef.current[i].refresh();
        } else {
          scrollRef.current[i] = new BScroll(wheelWrappers[i], {
            wheel: {
              wheelWrapperClass: "wheel-scroll",
              wheelItemClass: "wheel-item",
              selectedIndex: selectedIndexPair[i],
              rotate: 0,
            },
            mouseWheel: {
              speed:
                pickerData[i].length > 400 ? 400 * 5 : pickerData[i].length * 5,
              easeTime: 200,
              discreteTime: 150,
              dampingFactor: 0.8,
            },
            useTransition: false,
            probeType: 3,
          });
        }
      };

      const wrapper = wrapperRef.current;
      for (let i = 0; i < pickerData.length; i++) {
        if (wrapper !== null) {
          createWheel(Array.from(wrapper.children) as HTMLElement[], i);
        }
      }
    }
  }, [visible, selectedIndexPair]);

  const handleHide = () => {
    setVisible(false);
  };

  const handleConfirm = () => {
    scrollRef.current.forEach((wheel) => {
      wheel.restorePosition();
    });
    handleHide();
    const currentSelectedIndexPair = scrollRef.current.map((wheel) =>
      wheel.getSelectedIndex()
    );
    setSelectedIndexPair(currentSelectedIndexPair);
    setSelectedText(
      pickerData
        .map((data, i) => {
          const index = currentSelectedIndexPair[i];
          return `${data[index].text}-${index}`;
        })
        .join("__")
    );
  };

  const handleCancel = () => {
    scrollRef.current.forEach((wheel) => {
      wheel.restorePosition();
    });
    handleHide();
  };

  return (
    <>
      {/* <CSSTransition
        in={visible}
        classNames="picker-fade"
        timeout={300}
        onEnter={(node: { style: { display: string } }): void => {
          node.style.display = "block";
        }}
        onExited={(node) => {
          node.style.display = "";
        }}
      > */}
      <div
        className="picker select-none"
        // onClick={handleCancel}
        onTouchMove={(e) => {
          e.preventDefault();
        }}
      >
        {/* <CSSTransition in={visible} classNames="picker-move" timeout={300}> */}
        <div
          className="picker-panel"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <CancelSetBtnGroup
            handleClose={handleCancel}
            handleOk={handleConfirm}
          />
          <div className="picker-content">
            <div className="mask-top border-bottom-1px"></div>
            <div className="mask-bottom border-top-1px"></div>
            <div className="wheel-wrapper" ref={wrapperRef}>
              {pickerData.map((data, index) => (
                <div className="wheel" key={index}>
                  <ul className="wheel-scroll">
                    {data.map((item) => (
                      <li key={item.text} className="wheel-item select-none">
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="picker-footer"></div>
        </div>
        {/* </CSSTransition> */}
      </div>
      {/* </CSSTransition> */}
    </>
  );
};

export default DoubleColumn;
