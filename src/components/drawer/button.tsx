import React, { FC, MouseEventHandler } from "react";
import classnames from "classnames";
import { StyledComponentProps } from "@material-ui/styles/withStyles/withStyles";
import Button from "@material-ui/core/Button";

interface IProps {
  /**
   * 显示类型，文字按钮？实心按钮？边框按钮？
   * */
  showType?: "text" | "contained" | "outlined";
  /**
   * hover时的文字颜色
   * */
  hoverColor?: string;
  /**
   * hover时的背景色
   * */
  hoverBackgroundColor?: string;
  /**
   * 给按钮增加类名
   * */
  className?: string;
  /**
   * material ui专用属性
   * */
  classes?: StyledComponentProps["classes"];
  /**
   * 是否禁用
   * */
  disabled?: boolean;
  /**
   * 前面的icon
   * */
  startIcon?: React.ReactNode;
  /**
   * 自定义样式
   * */
  style?: React.CSSProperties;
  /**
   * 按钮的点击回调
   * */
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

/**
 * 按钮组件
 * */
const MaterialButton: FC<IProps> = ({
  showType = "contained",
  className = "",
  classes,
  style = {},
  disabled = false,
  startIcon,
  onClick,
  children,
}) => (
  <Button
    variant={showType}
    classes={{ label: "whitespace-nowrap", ...classes }}
    className={classnames(
      "material_button",
      { material_button_flex: !!startIcon },
      { material_button_block: !startIcon },
      className
    )}
    disabled={disabled}
    startIcon={startIcon}
    style={{
      outline: "none",
      textTransform: "capitalize",
      ...style,
    }}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default MaterialButton;
