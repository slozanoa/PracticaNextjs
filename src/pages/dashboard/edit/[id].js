import FormProduct from '@components/FormProduct';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/api';

export default function Edit() {
  const router = useRouter();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const { id } = router.query;
    if (!router?.isReady) return;
    async function getProduct() {
      try {
        const response = await axios.get(endPoints.products.getProduct(id));
        if (response) {
          setProduct(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [router?.isReady]);

  return <FormProduct product={product} />;
}
