"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check, ChevronsUpDown } from "lucide-react"

import React from 'react'
import Image from 'next/image'

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

import { useToast } from "@/hooks/use-toast"

import { UploadButton } from "@/utils/uploadthing";

const languages = [
  { label: "Paper", value: "Paper" },
  { label: "Book", value: "Book" },
  { label: "Shirt", value: "Shirt" },
  { label: "Bundle", value: "Bundle" },
  { label: "Mug", value: "Mug" },
  { label: "Sticker", value: "Sticker" },
  { label: "ID", value: "ID" },
  { label: "Keychain", value: "Keychain" },
  { label: "Other", value: "Other" },
] as const

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }).max(160, {
    message: "Description must not be longer than 30 characters.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
})

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const Products = () => {

  const { toast } = useToast()

  const [products, setProducts] = React.useState<Product[]>([]);
  const [uploadedFileUrl, setUploadedFileUrl] = React.useState<string | null>(null);
  const [isUploadDisabled, setIsUploadDisabled] = React.useState<boolean>(false);

  const [loading, setLoading] = React.useState(false)

  const [deleting, setDeleting] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const productData = {
      ...values,
      image: uploadedFileUrl,
    };

    if(!uploadedFileUrl) {
      toast({
        title: "Error",
        description: "Please upload an image for your product.",
      });
      return;
    }

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        toast({
          title: "Error",
          description: errorData.message || "Failed to create product.",
        });
        throw new Error('Failed to upload product');
      }
  
      toast({
        title: "Product created!",
        description: "Your product has been created successfully.",
      });
  
      const product = await response.json();
      console.log('Product uploaded successfully:', product);
  
      setUploadedFileUrl(null);
      form.reset();
      setIsUploadDisabled(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create product.",
      });
      console.error('Error:', error);
    }
  }
  

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch products:', response.statusText);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

    const deleteProduct = async (id: string) => {
      setDeleting(true);
      try {
        const response = await fetch(`/api/products/${id}`, {
          method: 'DELETE',
        });
    
        if (response.ok) {
          setProducts(prev => prev.filter(product => product.id !== id));
          toast({
            title: "Product deleted!",
            description: "Your product has been deleted successfully.",
          });
        }
        setDeleting(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setDeleting(false);
        toast({
          title: "Error",
          description: "Failed to delete product.",
        });
      }
    };

  return (
    <>
    <h1 className='text-2xl font-semibold'>Products</h1>
    <div className='w-full h-full gap-5 flex md:flex-row flex-col-reverse mt-5 border border-zinc-300'>
      <div className='w-full md:w-1/2 p-3'>
        <h1 className='text-lg font-medium'>Product List</h1>
        <div className='flex flex-col gap-3 border-t border-zinc-300 mt-3 pt-3 h-full max-h-[700px] overflow-y-auto'>
          {loading ? (
            <h1 className="text-2xl my-32 text-zinc-300 font-bold text-center">Loading</h1>
          ):(
            products.length === 0 ? (<div className="flex w-full h-full justify-center items-center">
              <h1 className="text-2xl my-32 text-zinc-300 font-bold">No Products Found</h1>
            </div>) : products.map((product) => (
              <div key={product.id} className='flex w-full'>
              <Image src={product.image} width={50} height={50} alt="logo" className='w-1/2 object-cover h-[100px]'/>
              <div className='w-1/2 flex flex-col ml-3'>
                <h1 className='text-lg font-semibold'>{product.title}</h1>
                <h2 className='text-zinc-600 text-sm'>{product.category}</h2>
              </div>
              <button
              disabled={deleting}
              className='justify-self-end place-self-end bottom-0 bg-red-500 border py-1 px-2 rounded-xl mt-5 font-light duration-200 transition-all hover:bg-red-600'
              onClick={() => deleteProduct(product.id)}
            >
              {deleting ? 'Deleting':'Delete'}
            </button>
            </div>
            ))
          )}
        </div>
      </div>
      <div className='w-full md:w-1/2 border-l border-zinc-300 p-3'>
        <h1 className='text-lg font-medium '>Add Product</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 border-t border-zinc-300 mt-3 pt-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name of product" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Category</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "justify-between w-full bg-[#f3f3f3]",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? languages.find(
                                (language) => language.value === field.value
                              )?.label
                            : "Select Category"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search category..."
                          className="h-9"
                        />
                        <CommandList>
                          <CommandEmpty>No Category found.</CommandEmpty>
                          <CommandGroup className="max-h-[200px] overflow-y-auto">
                            {languages.map((language) => (
                              <CommandItem
                                value={language.label}
                                key={language.value}
                                onSelect={() => {
                                  form.setValue("category", language.value)
                                }}
                              >
                                {language.label}
                                <Check
                                  className={cn(
                                    "ml-auto h-4 w-4",
                                    language.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about the product"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {!uploadedFileUrl ? (
              <UploadButton
              endpoint="imageUploader"
              className={`${isUploadDisabled ? 'hidden':''} bg-zinc-300`} // Disable the upload button based on the state
              onClientUploadComplete={(res) => {
                if (res.length > 0) {
                  const fileUrl = res[0].url;
                  setUploadedFileUrl(fileUrl);
                  console.log("Uploaded file URL:", fileUrl);
                  setIsUploadDisabled(true); // Disable the upload button after the first upload
                }
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
            ):(
              <Image src={uploadedFileUrl} width={100} height={100} alt="image"/>
            )}
            <Button type="submit" disabled={form.formState.isSubmitting} className="w-full bg-main hover:bg-main">{form.formState.isSubmitting ? 'Submitting':'Submit'}</Button>
          </form>
        </Form>
      </div>
    </div>
    </>
  );
}

export default Products