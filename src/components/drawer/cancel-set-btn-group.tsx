import React, { FC, MouseEventHandler } from 'react';
import classNames from 'classnames';
import MaterialButton from './button';

interface IProps {
  className?: string;
  cancelClassName?: string;
  okClassName?: string;
  groupStyle?: React.CSSProperties;
  cancelStyle?: React.CSSProperties;
  okStyle?: React.CSSProperties;
  handleClose: MouseEventHandler<HTMLButtonElement>;
  handleOk: MouseEventHandler<HTMLButtonElement>;
}

const CancelSetBtnGroup: FC<IProps> = ({
  className = '',
  cancelClassName = '',
  okClassName = '',
  groupStyle = {},
  cancelStyle = {},
  okStyle = {},
  handleClose,
  handleOk,
}) => (
  <article
    className={classNames('p-4 box-border overflow-hidden flex justify-between', `${className}`)}
    style={{
      height: 76,
      minHeight: 76,
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      ...groupStyle,
    }}
  >
    <MaterialButton
      className={cancelClassName}
      style={{
        color: '#202020',
        backgroundColor: '#FCFCFC',
        fontSize: 16,
        fontWeight: 400,
        ...cancelStyle,
      }}
      onClick={handleClose}
    >
      取消
    </MaterialButton>
    <MaterialButton
      className={okClassName}
      style={{
        backgroundColor: '#CC2227',
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 400,
        ...okStyle,
      }}
      onClick={handleOk}
    >
      确认
    </MaterialButton>
  </article>
);

export default CancelSetBtnGroup;
