/*
 * @Author: mingwei
 * @Date: 2022-06-14 11:22:32
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-14 11:22:33
 * @FilePath: /vite-project/src/components/TextInput/index.tsx
 * @Description:
 */
import React from "react";
import { Form, Input, Select } from "antd";

const { TextArea } = Input;
const { Option } = Select;

export type FormDataType = {
  lable: string;
  name: string;
  rules: any;
  inputType: string | "input" | "textArea" | "select" | "number" | "email";
  selectMap?: Array<any> | [];
  placeholder?: string | "";
};

type CoreUiTextInputType = {
  option?: any;
  textForm: any;
  formData: Array<FormDataType>;
};

const { Item } = Form;
export const CoreTextInputForm: React.FC<CoreUiTextInputType> = ({
  option,
  textForm,
  formData,
}) => {
  const renderInputType = (
    type: string,
    selectMap?: Array<any> | [],
    placeholder?: string
  ) => {
    switch (type) {
      case "input":
        return <Input placeholder={placeholder} />;
      case "textArea":
        return <TextArea placeholder={placeholder} />;
      case "number":
        return <Input type="number" placeholder={placeholder} />;
      case "email":
        return <Input type="email" placeholder={placeholder} />;
      case "select":
        return (
          <Select placeholder={placeholder}>
            {selectMap?.map((map: { value: any; key: any }) => (
              <Option key={map.key}>{map.value}</Option>
            ))}
          </Select>
        );
      default:
        return <></>;
    }
  };

  return (
    <Form {...option} form={textForm}>
      {formData.map((item) => (
        <Item label={item.lable} name={item.name} rules={item.rules}>
          {renderInputType(item.inputType, item.selectMap, item.placeholder)}
        </Item>
      ))}
    </Form>
  );
};
