import React from "react";
import { MoveUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactCard from "@/app/contact/contact-card-adv";
import { cn } from "@/lib/utils";

const QuotationModal = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "flex gap-2 items-center px-3 py-2 rounded-lg transition-all duration-300",
          "hover:scale-105 hover:shadow-lg",
          scrolled
            ? "hover:bg-brand-50/10 hover:text-brand-50 hover:border-brand-50/30"
            : "hover:bg-white/10 hover:text-white hover:border-white/30",
          "border border-transparent"
        )}
      >
        <span>Get a Quote</span>
        <MoveUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </DialogTrigger>

      <DialogContent className="max-w-4xl bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl">
        <DialogDescription>
          <ContactCard />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default QuotationModal;
