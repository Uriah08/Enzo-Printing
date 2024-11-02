"use client"

import React from 'react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductPage = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [loading, setLoading] = React.useState(false);
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);
  const [showResults, setShowResults] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch products:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = () => {
    setShowResults(true);
    const results = products.filter(product => {
      const matchesQuery = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
    setFilteredProducts(results);
  };

  return (
    <div className='h-[100vh] overflow-y-auto w-full flex flex-col items-center'>
      <Link href={'/'}>
        <Image src="/logo.svg" width={200} height={200} alt='logo' className='mt-10'/>
      </Link>
      <div className='max-w-[1200px] p-5 sm:p-10 flex flex-col items-center'>
        <div className='flex items-center'>
          <Input onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search...' className='rounded-none'/>
          <button onClick={handleSearch} className='h-[36px] px-5 text-[#f3f3f3] bg-main'>Search</button>
          <Select onValueChange={(value) => setSelectedCategory(value)}>
            <SelectTrigger>
              <Filter className='text-main ml-5' size={35}/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Paper">Paper</SelectItem>
                <SelectItem value="Book">Book</SelectItem>
                <SelectItem value="Shirt">Shirt</SelectItem>
                <SelectItem value="Bundle">Bundle</SelectItem>
                <SelectItem value="Mug">Mug</SelectItem>
                <SelectItem value="Sticker">Sticker</SelectItem>
                <SelectItem value="ID">ID</SelectItem>
                <SelectItem value="Keychain">Keychain</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {loading ? (
          <div className='h-full flex justify-center items-center'>
            <h1 className="text-5xl font-bold text-zinc-300 my-36">Loading...</h1>
          </div>
        ) : (
          showResults && filteredProducts.length === 0 ? (
            <div className='h-full flex justify-center items-center'>
              <h1 className="text-5xl font-bold text-zinc-300 my-36 text-center">No Products Found</h1>
            </div>
          ) : (
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
            {(showResults ? filteredProducts : products).map((product, i) => (
              <div key={i} className='bg-[#f3f3f3] w-full flex'>
                <div className='w-1/2'>
                  <Image src={product.image} width={300} height={300} alt='product' className='object-cover h-full' />
                </div>
                <div className='w-1/2 flex flex-col p-3 h-full'>
                  <h1 className='text-xl font-semibold'>{product.title}</h1>
                  <h2 className='bg-main px-3 py-1 rounded-xl w-fit text-white font-light mt-2'>{product.category}</h2>
                  <p className='text-sm text-zinc-600 font-light text-justify mt-5'>{product.description}</p>
                  <button className='justify-self-end place-self-end bottom-0 bg-white border py-1 px-2 rounded-xl mt-5 font-light duration-200 transition-all hover:bg-main'>
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        )
        )}
      </div>
    </div>
  );
};

export default ProductPage;
