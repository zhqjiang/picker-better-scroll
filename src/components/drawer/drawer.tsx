import React, { FC } from "react";
import { Drawer } from "@material-ui/core";
import { DrawerProps } from "@material-ui/core/Drawer/Drawer";

interface IProps extends DrawerProps {
  visible: boolean;
  className?: string;
  position?: "top" | "left" | "bottom" | "right";
}

/**
 * 抽屉 UI 组件
 * @param visible 显示开关
 * @param className 类名
 * @param position 控制抽屉显示方向
 * @param children 子组件
 * */
const MaterialDrawer: FC<IProps> = ({
  visible,
  className = "",
  position = "bottom",
  children,
}) => (
  <Drawer open={visible} className={className} anchor={position}>
    {children}
  </Drawer>
);

export default MaterialDrawer;
