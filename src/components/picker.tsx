import React, { useState, useRef, useEffect } from "react";
import "./picker.scss";
import { CSSTransition } from "react-transition-group";
import BScroll from "@better-scroll/core";
import Wheel from "@better-scroll/wheel";
import MouseWheel from "@better-scroll/mouse-wheel";
import { DATA1, DATA2, DATA3 } from "./exampleData";
BScroll.use(Wheel);
BScroll.use(MouseWheel);

const pickerData = [DATA1, DATA2, DATA3];

const DoubleColumn = () => {
  const [visible, setVisible] = useState(false);
  const [selectedIndexPair, setSelectedIndexPair] = useState(
    new Array(pickerData.length).fill(0)
  );
  const [selectedText, setSelectedText] = useState("open");

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
              easeTime: 100,
              discreteTime: 150,
              dampingFactor: 0.1,
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

  const handleShow = () => {
    if (visible) {
      return;
    }
    setVisible(true);
  };

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
    <div className="container view">
      <div className="container-btn" onClick={handleShow}>
        {selectedText}
      </div>
      <CSSTransition
        in={visible}
        classNames="picker-fade"
        timeout={300}
        onEnter={(node: { style: { display: string } }): void => {
          node.style.display = "block";
        }}
        onExited={(node) => {
          node.style.display = "";
        }}
      >
        <div
          className="picker"
          onClick={handleCancel}
          onTouchMove={(e) => {
            e.preventDefault();
          }}
        >
          <CSSTransition in={visible} classNames="picker-move" timeout={300}>
            <div
              className="picker-panel"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="picker-choose border-bottom-1px">
                <span className="cancel" onClick={handleCancel}>
                  Cancel
                </span>
                <span className="confirm" onClick={handleConfirm}>
                  Confirm
                </span>
                <h1 className="picker-title">Title</h1>
              </div>
              <div className="picker-content">
                <div className="mask-top border-bottom-1px"></div>
                <div className="mask-bottom border-top-1px"></div>
                <div className="wheel-wrapper" ref={wrapperRef}>
                  {pickerData.map((data, index) => (
                    <div className="wheel" key={index}>
                      <ul className="wheel-scroll">
                        {data.map((item) => (
                          <li key={item.text} className="wheel-item">
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
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DoubleColumn;
