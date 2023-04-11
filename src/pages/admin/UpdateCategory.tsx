import { Button, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

interface IProps {
  category: any;
  onUpdate: (categori: any) => void;
}

const UpdateCategoryPage = (props: IProps) => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const currentCategory = props.category.find(
      (categori) => categori.id === Number(id)
    );
    reset(currentCategory);
  }, [props]);

  const onHandleSubmit = (data: any) => {
    console.log(data);

    props.onUpdate(data);
    setIsSuccess(true);
    message.success("Cập nhật category thành công!");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <label htmlFor="">Name: </label>
        <input
          style={{
            borderRadius: "5px",
            padding: "5px",
            borderColor: "#F0F0F0",
            border: "0.5px solid",
            marginLeft: "10px",
            width: "300px",
          }}
          type="text"
          {...register("name")}
        />
        <FormItem>
          <Button
            style={{ marginTop: "20px" }}
            type="primary"
            htmlType="submit"
          >
            Update Category
          </Button>
        </FormItem>
      </form>
    </div>
  );
};

export default UpdateCategoryPage;
