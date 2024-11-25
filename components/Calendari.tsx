"use client";
import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import "./Calendari.css";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="campcalend">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}
