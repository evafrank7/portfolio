"use client"; // Enables hooks like useForm and useState

import * as React from "react";
import { z } from "zod"; // Validation library
import { useForm } from "react-hook-form"; // State/validation manager
import { zodResolver } from "@hookform/resolvers/zod"; //  bridge between zod & react-hook
import  NavBar  from "@/components/layout/navbar"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form Schema -> declares what valid input is 
const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

// Creates TypeScript type from schema -> { name: string, email: string, etc.}
type ContactValues = z.infer<typeof ContactSchema>;

export default function ContactPage() {
  // Creates a form instance with schema
  const form = useForm<ContactValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onSubmit",
  });

  // Status sate and submit handler
  const [status, setStatus] = React.useState<"idle"|"sending"|"sent"|"error">("idle");
  const onSubmit = async (values: ContactValues) => {
    try {
      setStatus("sending");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed request");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
    <NavBar />
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100 pb-70">
      <div className=" pt-25 w-full max-w-xl">
        <h1 className="font-italiana uppercase text-3xl font-bold tracking-tight">Contact me</h1>
        <p className="font-italiana text-muted-foreground mt-2">
          Have a question or inqury in mind? Send me a message below!
        </p>

        <div className="mt-6 rounded-lg border p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="jane@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter message here..."
                        className="min-h-[140px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="font-italiana uppercase button w-full"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </Button>
                {status === "sent" && (
                  <p className="mt-2 text-sm text-green-600">Message sent! I’ll reply soon. :)</p>
                )}
                {status === "error" && (
                  <p className="mt-2 text-sm text-red-600">Something went wrong. Please try again. :( </p>
                )}
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
    </>
  );
}