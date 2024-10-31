"use client"

import React from 'react'
import { useToast } from '@/hooks/use-toast';

interface Feedback {
  id: string;
  message: string;
  createdAt: string;
}

const Feedback = () => {

  const { toast } = useToast();

  const [feedbacks, setFeedbacks] = React.useState<Feedback[]>([]);

  const [deleting, setDeleting] = React.useState(false)

  React.useEffect(() => {
    const fetchFeedbacks = async () => {
        try {
            const response = await fetch('/api/feedback');
            const data = await response.json();

            if (response.ok) {
                setFeedbacks(data);
            } else {
                toast({
                    title: "Error",
                    description: "Failed to fetch feedbacks",
                });
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to fetch feedbacks",
            });
        }
    };

    fetchFeedbacks();
}, [toast]);

const handleDelete = async (id: string) => {
  
  setDeleting(true);
  try {
      const response = await fetch(`/api/feedback/${id}`, {
          method: 'DELETE',
      });

      if (response.ok) {
          toast({
              title: "Feedback deleted!",
              description: "Your feedback has been removed.",
          });

          // Update the state to remove the deleted feedback
          setFeedbacks(prev => prev.filter(feedback => feedback.id !== id));
      } else {
          const result = await response.json();
          toast({
              title: "Error",
              description: result.message || "Failed to delete feedback.",
          });
      }
      setDeleting(false);
  } catch (error) {
    setDeleting(false);
      console.error("Error deleting feedback:", error);
      toast({
          title: "Error",
          description: "Failed to delete feedback.",
      });
  }
};

  return (
    <>
    <h1 className='text-2xl font-semibold'>Feedbacks</h1>
    <div className='flex flex-col gap-3 pt-5'>
      {feedbacks.length === 0 && 
        <div className='flex w-full h-full py-32 justify-center items-center'>
          <h1 className='text-center text-2xl md:text-5xl font-bold text-zinc-300'>
            No Feedbacks Found
          </h1>
        </div>}
      {feedbacks.map((feedback) => (
        <div key={feedback.id} className='border border-zinc-300 p-3 rounded-2xl flex md:flex-row flex-col justify-between items-center'>
        <h1 className='font-light'><span className='font-semibold'>Feedback: </span>{feedback.message}</h1>
        <div className='flex items-center gap-3'>
          <p className='text-zinc-600'>{new Date(feedback.createdAt).toLocaleString()}</p>
        <button disabled={deleting} onClick={() => handleDelete(feedback.id)} className='bg-red-500 py-1 px-3 rounded-lg text-[#f3f3f3]'>{deleting ? 'Deleting':'Delete'}</button>
        </div>
      </div>
      ))}
    </div>
    </>
  )
}

export default Feedback