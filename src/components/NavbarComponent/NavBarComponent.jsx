import React from "react";
import { Checkbox, Col, Rate, Row } from "antd";
import styled from "styled-components";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperContent,
  WrapperLableText,
  WrapperTextPrice,
  WrapperTextValue,
} from "./style";

const NavBarComponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option) => {
              return (
                <Checkbox style={{ marginLeft: 0 }} value={option.value}>
                  {option.label}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          return (
            <div style={{ dispaly: "flex" }}>
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={option}
              />
              <span> {`tu ${option}  sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return <WrapperTextPrice>{option}</WrapperTextPrice>;
        });
      default:
        return {};
    }
  };
  const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f0f0f0; 
    padding: 10px; 
  `;
  return (
    <div>
      <WrapperLableText >Danh mục</WrapperLableText>
      <WrapperContent>
        {[
          "Điện thoại, Tablet",
          "Gia dụng, Smarthome",
          "Laptop",
          "PC, Màn hình",
          "Phụ kiện",
          "Tivi",
          "Âm thanh",
          "Đồng hồ, Camera",
        ].map((name) => (
          <TypeProduct key={name} name={name} />
        ))}
      </WrapperContent>
    </div>
  );
};

export default NavBarComponent;
