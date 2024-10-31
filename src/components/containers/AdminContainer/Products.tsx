"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Check, ChevronsUpDown, ImagePlus } from "lucide-react"

import React from 'react'
import Image from 'next/image'

import { cn } from "@/lib/utils"

import { useDropzone } from "react-dropzone";

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
  image: z.instanceof(File)
  .refine((file) => file.size !== 0, "Please upload an image")
})

const Products = () => {

  const [preview, setPreview] = React.useState<string | ArrayBuffer | null>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      image: new File([""], "filename"),
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader();
      try {
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(acceptedFiles[0]);
        form.setValue("image", acceptedFiles[0]);
        form.clearErrors("image");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setPreview(null);
        form.resetField("image");
      }
    },
    [form],
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      maxSize: 1000000,
      accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
    });

  return (
    <>
    <h1 className='text-2xl font-semibold'>Products</h1>
    <div className='w-full h-full gap-5 flex mt-5 border border-zinc-300'>
      <div className='w-1/2 p-3'>
        <h1 className='text-lg font-medium'>Product List</h1>
        <div className='flex flex-col gap-3 border-t border-zinc-300 mt-3 pt-3'>
          <div className='flex w-full'>
            <Image src={"/products/mugsample1.jpg"} width={50} height={50} alt="logo" className='w-1/2 object-cover h-[100px]'/>
            <div className='w-1/2 flex flex-col ml-3'>
              <h1 className='text-lg font-semibold'>Mug 1</h1>
              <h2 className='text-zinc-600 text-sm'>Tag 1</h2>
            </div>
          </div>
          <div className='flex w-full'>
            <Image src={"/products/mugsample1.jpg"} width={50} height={50} alt="logo" className='w-1/2 object-cover h-[100px]'/>
            <div className='w-1/2 flex flex-col ml-3'>
              <h1 className='text-lg font-semibold'>Mug 1</h1>
              <h2 className='text-zinc-600 text-sm'>Tag 1</h2>
            </div>
          </div>
          <div className='flex w-full'>
            <Image src={"/products/mugsample1.jpg"} width={50} height={50} alt="logo" className='w-1/2 object-cover h-[100px]'/>
            <div className='w-1/2 flex flex-col ml-3'>
              <h1 className='text-lg font-semibold'>Mug 1</h1>
              <h2 className='text-zinc-600 text-sm'>Tag 1</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='w-1/2 border-l border-zinc-300 p-3'>
        <h1 className='text-lg font-medium'>Add Product</h1>
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
                            : "Select language"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search framework..."
                          className="h-9"
                        />
                        <CommandList>
                          <CommandEmpty>No framework found.</CommandEmpty>
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
            <FormField
            control={form.control}
            name="image"
            render={() => (
              <FormItem className="mx-auto md:w-1/2">
                <FormLabel
                  className={`${
                    fileRejections.length !== 0 && "text-destructive"
                  }`}
                >
                  <h2 className={`text-xl font-semibold tracking-tight ${preview ? 'text-black':'text-zinc-300'}`}>
                    Upload your image
                    <span
                      className={
                        form.formState.errors.image || fileRejections.length !== 0
                          ? "text-destructive"
                          : "text-muted-foreground"
                      }
                    ></span>
                  </h2>
                </FormLabel>
                <FormControl>
                  <div
                    {...getRootProps()}
                    className="mx-auto flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border border-zinc-300 p-8"
                  >
                    {preview && (
                      <Image
                      width={100}
                      height={100}
                        src={preview as string}
                        alt="Uploaded image"
                        className="max-h-[400px] rounded-lg"
                      />
                    )}
                    <ImagePlus
                      className={`size-40 text-zinc-300 ${preview ? "hidden" : "block"}`}
                    />
                    <Input {...getInputProps()} type="file" />
                    {isDragActive ? (
                      <p className="text-zinc-300">Drop the image!</p>
                    ) : (
                      <p className="text-zinc-300">Click here or drag an image to upload it</p>
                    )}
                  </div>
                </FormControl>
                <FormMessage>
                  {fileRejections.length !== 0 && (
                    <p>
                      Image must be less than 1MB and of type png, jpg, or jpeg
                    </p>
                  )}
                </FormMessage>
              </FormItem>
            )}
          />
            <Button type="submit" className="w-full bg-main">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
    </>
  );
}

export default Products