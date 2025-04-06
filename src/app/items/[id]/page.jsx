'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getMenuItemById, updateMenuItem } from '../../../../services/menuItemService';
import ItemForm from '../../../../components/ItemForm';

const EditItemPage = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getMenuItemById(id);
        setItem(data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [id]);

  const handleSubmit = async (updatedItem) => {
    try {
      await updateMenuItem(id, updatedItem);
      router.push('/items');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Item</h1>
      <ItemForm item={item} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditItemPage;