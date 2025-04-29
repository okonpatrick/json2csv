'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export default function ExportPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleExport = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/export', {
        responseType: 'blob',
      });

      // Create URL for download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'waitlist.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Success toast
      toast('File downloaded successfully!');
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        toast.error('No data available to export.');
      } else {
        toast.error('Something went wrong while downloading.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-10 bg-white rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <h1 className="text-2xl font-bold text-center">Export Waitlist Data</h1>
          <p className="text-gray-500 text-center">
            Click below to download the database as CSV
          </p>

          <Button onClick={handleExport} disabled={isLoading} className="w-full flex items-center justify-center">
            {isLoading && <Loader2 className="animate-spin h-5 w-5 mr-2" />}
            {isLoading ? 'Downloading...' : 'Download CSV'}
          </Button>
        </motion.div>
      </div>
    </>
  );
}
