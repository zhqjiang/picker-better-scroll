import React, { FC } from "react";
import "./picker.scss";
import BScroll from '@better-scroll/core'
import Wheel from '@better-scroll/wheel'

interface IProps {}
BScroll.use(Wheel)

const STATE_HIDE = 0
const STATE_SHOW = 1

const COMPONENT_NAME = 'picker'
const EVENT_SELECT = 'select'
const EVENT_CANCEL = 'cancel'
const EVENT_CHANGE = 'change'

const Picker: FC<IProps> = () => {
  return <div>Picker</div>;
};

export default Picker;
