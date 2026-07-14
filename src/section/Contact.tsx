import { TextField } from "@mui/material";
import { Button, Input, TextArea } from "@heroui/react";

export default function ContactSection() {
  return (
    <section className="min-h-screen flex flex-col place-content-center  bg-gray-800 w-full text-white space-y-8">
      <p className="text-3xl font-bold text-center">Contact me</p>
      <div className="mx-auto container w-11/12 lg:w-1/4">
        <div className="space-y-2">
          <Input fullWidth placeholder="Your name" />
          <TextArea rows={6} fullWidth placeholder="Your message.." />
          <Button fullWidth>Submit</Button>
        </div>
      </div>
    </section>
  );
}
