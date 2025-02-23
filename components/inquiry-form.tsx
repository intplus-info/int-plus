'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowRight } from 'lucide-react';
import { type InquiryFormData, inquiryFormSchema } from '@/schemas/inquiryFormSchema';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquiryFormSchema),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = handleSubmit(async (data: InquiryFormData) => {
    console.log(data);
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_ejfteur', // EmailJS service ID
        'template_070lelq', // Replace EmailJS template ID
        '#my-form', // Form ID
        'VkT4Jn2og1P0vOo7i' // EmailJS public key
      )
      .then((response) => {
        // console.log("Email sent successfully:", response)
        toast({
          description: 'Your message has been sent.',
        });
        form.reset();
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'Your message was not sent.',
        });
        setIsSubmitting(false);
      });
  });

  return (
    <div id="inquiryForm" className="bg-background px-8 md:px-0 py-12 scroll-mt-14">
      <div className="mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-medium">Online Inquiry Form</h1>
          <p className="text-muted-foreground text-sm">
            Please fill in the following details, and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form id="my-form" onSubmit={onSubmit} className="space-y-8 md:border rounded-2xl md:p-10">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your Name"
                {...register('name')}
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your Email"
                {...register('email')}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your Phone Number"
                {...register('phone')}
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="service">Select Service</Label>
              <Controller
                name="service"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger
                      className={
                        errors.service ? 'border-red-500 rounded-full pl-4' : 'pl-4 rounded-full'
                      }
                    >
                      <SelectValue placeholder="Select your Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company / Organization Name</Label>
              <Input id="company" placeholder="Enter Name" {...register('company')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger
                      className={
                        errors.subject ? 'border-red-500 rounded-full pl-4' : 'pl-4 rounded-full'
                      }
                    >
                      <SelectValue placeholder="Select your Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your Message"
              {...register('message')}
              className={`min-h-[150px] ${errors.message ? 'border-red-500' : ''}`}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button type="submit" disabled={isSubmitting} variant={'outline'} className="group">
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send your Inquiry
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all ease-in-out duration-300" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
