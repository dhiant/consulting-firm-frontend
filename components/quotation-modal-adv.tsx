import React from "react";
import { MoveUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactCard from "@/app/contact/contact-card-adv";

const QuotationModal = ({ scrolled }: { scrolled?: boolean }) => {
  return (
    <Dialog>
      <DialogTrigger
        className={`relative group flex gap-2 items-center transition-colors duration-300 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        <span>Get a Quote</span> <MoveUpRight size={16} />
        <span
          className={`absolute left-0 bottom-0 w-0 h-0.5 ${
            scrolled ? "bg-black" : "bg-white"
          } transition-all duration-300 group-hover:w-full`}
        ></span>
      </DialogTrigger>

      <DialogContent>
        <DialogDescription>
          <ContactCard />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default QuotationModal;
