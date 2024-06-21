'use client';
import React, { useState } from 'react';

interface Customer {
  name: string;
  email: string;
     image_url: string;
}
import {createCustomer} from "@/app/lib/actions";


const CustomerRegistration: React.FC = () => {
  const [customer, setCustomer] = useState<Customer>({
    name: '',
    email: '',
    image_url: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };
  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object from the customer state
    e.preventDefault();
    customer.image_url = '/customers/evil-rabbit.png'
    const formData = new FormData();
    formData.append('name', customer.name);
    formData.append('email', customer.email);
    formData.append('image_url', customer.image_url);

    const response = await createCustomer(formData);


  };
  return (
    <form onSubmit={registerUser}>
      <input name="name" value={customer.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={customer.email} onChange={handleChange} placeholder="Email" />


      <button type="submit">Register</button>
    </form>
  );
};

export default CustomerRegistration;