"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInput {
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  zipcode: string;
}

// yup schema
const schema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  address: yup.string().required("Address is a required field"),
  city: yup.string().required("City is a required field"),
  state: yup.string().required("State is a required field"),
  phone: yup
    .string()
    .required("Phone is a required field")
    .matches(/^\d{2,3}-\d{3,4}-\d{4}$/, "Invalid phone number format"),
  zipcode: yup
    .string()
    .required("Zipcode is a required field")
    .matches(/^\d{3}(?:[-\s]\d{4})?$/, "Invalid zipcode format"),
});

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}

      <label>Address</label>
      <input {...register("address")} />
      {errors.address && <p>{errors.address.message}</p>}

      <div className="input-group">
        <div className="input-field">
          <label>City</label>
          <input {...register("city")} />
          {errors.city && <p>{errors.city.message}</p>}
        </div>
        <div className="input-field">
          <label>State</label>
          <input {...register("state")} />
          {errors.state && <p>{errors.state.message}</p>}
        </div>
        <div className="input-field">
          <label>ZIP Code</label>
          <input {...register("zipcode")} />
          {errors.zipcode && <p>{errors.zipcode.message}</p>}
        </div>
      </div>
      <label>Phone</label>
      <input {...register("phone")} />
      {errors.phone && <p>{errors.phone.message}</p>}

      <input type="submit" />
    </form>
  );
}
