"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Mail, MoveRight, Phone } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber:"",
    company:"",
    message:"",
    interest:"",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { fullName, email } = formData;

    console.log(fullName);

    if (!email) {
      toast.error("Please fill in required fields.");
      return;
    }

    setLoading(true);

    try {
      // Simulate an async request
      await new Promise((res) => setTimeout(res, 1000));

      // Reset form
      setFormData({
        fullName: "",
        email: "",
      phoneNumber:"",
    company:"",
    message:"",
    interest:"",
      });

      toast.success("Message sent successfully!");
    } catch (err) {
      toast.error("Failed to send message.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className=" mt-4">
     
      <CardContent>


     
        <h2 className="text-3xl font-bold text-gray-900 my-6">Contact us</h2>

        <div className="flex items-center gap-4 text-gray-700 mb-6">
          <span className="flex items-center gap-1">
            <Phone />
            Toll free 800 KPS
          </span>
          <span className="flex items-center gap-1">
            <Mail />
            <a href="mailto:Hello@kpsworld.com">Hello@kpsworld.com</a>
          </span>
        </div>

        <form onSubmit={handleSubmit} className=" my-3 space-y-4 bg-white   w-full max-w-2xl  relative">
          <div>
            <Select
              onValueChange={(value) =>
    setFormData({ ...formData, interest: value })
  }
>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="I am interested in" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="world1">World1</SelectItem>
                <SelectItem value="world2">World2</SelectItem>
                <SelectItem value="world3">World3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
            id="fullName"
              type="text"
              placeholder="Full name******"
              className="border-b border-gray-300 focus:outline-none p-2"
              value={formData.fullName}
                onChange={handleChange}
           />
            <Input
            id="phoneNumber"
              type="text"
              placeholder="Phone number******"
              className="border-b border-gray-300 focus:outline-none p-2"
              value={formData.phoneNumber}
                onChange={handleChange}
           />
            <Input
            id="email"
              type="email"
              placeholder="Email address******"
              className="border-b border-gray-300 focus:outline-none p-2"
              value={formData.email}
                onChange={handleChange}
           />
            <Input
            id="company"
              type="text"
              placeholder="Company******"
              className="border-b border-gray-300 focus:outline-none p-2"
              value={formData.company}
                onChange={handleChange}
           />
          </div>

          <div>
            <Textarea
              id="message"
              placeholder="Message / enquiry******"
              className="w-full border-b border-gray-300 focus:outline-none p-2"
              rows={2}
              maxLength={100}
              value={formData.message}
              onChange={handleChange}
            ></Textarea>
          </div>

          <div className="flex items-center gap-4">
            <Button
              type="submit"
             
              className="border px-6 py-2 text-sm font-semibold text-white hover:bg-gray-700"
             disabled={loading}
            >
             {loading?"Sending":"Send a Quote"}
             <MoveRight />
            </Button>
            <span className="text-xs text-gray-500">
              By submitting this form you agree to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </span>
          </div>
        </form>
    
      </CardContent>
      <ToastContainer />
    </Card>
  );
};

export default ContactCard;
