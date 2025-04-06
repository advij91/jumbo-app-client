'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { uploadMenuItem } from '../../../../services/menuItemService';
import ItemForm from '../../../../components/ItemForm';

const CreateItemPage = () => {
  const router = useRouter();

  const handleSubmit = async (newItem) => {
    try {
      await uploadMenuItem(newItem);
      router.push('/items');
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Item</h1>
      <ItemForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateItemPage;