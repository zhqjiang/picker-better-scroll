import React, { FC, MouseEventHandler, CSSProperties } from "react";
import CancelSetBtnGroup from "./cancel-set-btn-group";
import MaterialDrawer from "./drawer";
interface IProps {
  visible: boolean;
  className?: string;
  bodyClassName?: string;
  bodyStyle?: CSSProperties;
  handleClose: MouseEventHandler<HTMLButtonElement>;
  handleOk: MouseEventHandler<HTMLButtonElement>;
  hideCancelSetBtnGroup?: boolean;
}

/**
 * 使用了取消，确定作为顶部按钮的弹出窗口
 * @param visible 是否可见
 * @param theme 主题
 * @param className 自定义弹窗的类名
 * @param handleClose 取消按钮的回调
 * @param handleOk 确定按钮的回调
 * @param children 子组件
 * */
const CancelSetDrawer: FC<IProps> = ({
  visible,
  className,
  handleClose,
  handleOk,
  children,
  hideCancelSetBtnGroup,
}) => (
  <MaterialDrawer className={className} visible={visible}>
    {!hideCancelSetBtnGroup ? (
      <CancelSetBtnGroup handleClose={handleClose} handleOk={handleOk} />
    ) : null}
    {children}
  </MaterialDrawer>
);

export default CancelSetDrawer;
