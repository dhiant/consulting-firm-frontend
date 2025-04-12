import React from "react";
import { MoveUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactCard from "@/app/contact/contact-card";

const QuotationModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="flex gap-2 items-center hover:text-black">
        <span>Free Quote</span> <MoveUpRight size={16} />
      </DialogTrigger>

      <DialogContent className="p-1">
        <DialogDescription>
          <ContactCard />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default QuotationModal;
