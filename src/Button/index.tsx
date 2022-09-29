import * as React from "react";
import style from './index.less'

export interface IColumnProps {
  /** 
   * @description 设置按钮的标题  
   * */
   title?: string;
  /** 
   * @description 设置按钮的图标组件  
   * */
  icon?: 'ReactNode';
   /** 
   * @description 设置按钮的背景颜色  
   * */
    backgorund?: string;
  /** 
   * @description 设置按钮的边框 
   * */
   border?: string;
  /**
   * @description 点击按钮时的回调
   * @default boolean
   */
  onClick?: () => void;
}

export const Button = (props: IColumnProps) => {
  const { onClick, title, icon, backgorund, border } = props
  return <button 
            onClick={onClick} 
            className={style.button} 
            style={{background: `${backgorund}`,border:`${border}`}}
          >
            {props.icon===undefined ? '' : <img className={style.button_con} src={icon}/>}
            {title}
          </button>;
}

export default Button;
