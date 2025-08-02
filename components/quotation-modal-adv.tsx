import React from "react";
import { MoveUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactCard from "@/app/contact/contact-card-adv";

const QuotationModal = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <Dialog>
      <DialogTrigger
        className={`flex items-center gap-2 relative transition-all duration-300 hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:${
          scrolled ? "bg-black" : "bg-white"
        } after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform`}
      >
        <span>Get a Quote</span> <MoveUpRight size={16} />
      </DialogTrigger>

      <DialogContent className="">
        <DialogDescription>
          <ContactCard />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default QuotationModal;
