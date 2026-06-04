"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

const salons = ["Paris · Rue de la Paix", "Genève · Rue du Rhône", "New York · Madison Ave", "A private residence"];
const interests = [
  "An existing piece",
  "A bespoke commission",
  "A gift",
  "Simply to discover the maison",
];
const times = ["Morning", "Afternoon", "Early evening"];

export function BookingForm() {
  const params = useSearchParams();
  const piece = params.get("piece") ?? "";
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-champagne/40 bg-ivory p-10 text-center md:p-16">
        <p className="eyebrow">Request received</p>
        <h3 className="mt-6 font-display text-3xl text-espresso md:text-4xl">
          Thank you. The salon will be in touch.
        </h3>
        <p className="mx-auto mt-5 max-w-md font-serif text-lg leading-relaxed text-espresso/65">
          A Corvalier advisor will contact you within two business days to
          confirm your private appointment. We look forward to receiving you.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="link-underline mt-8 font-sans text-[0.66rem] uppercase tracking-wide2 text-champagne-deep"
        >
          Make another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="space-y-9"
    >
      {piece && (
        <div className="flex items-center justify-between border border-champagne/40 bg-champagne/10 px-5 py-4">
          <span className="font-sans text-[0.6rem] uppercase tracking-wide2 text-espresso/50">
            Regarding
          </span>
          <span className="font-serif text-lg text-espresso">{piece}</span>
        </div>
      )}

      <div className="grid gap-9 sm:grid-cols-2">
        <Field label="First name" name="first" required />
        <Field label="Last name" name="last" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Telephone" name="phone" type="tel" />
      </div>

      <Select label="Preferred salon" name="salon" options={salons} />

      <div className="grid gap-9 sm:grid-cols-2">
        <Field label="Preferred date" name="date" type="date" />
        <Select label="Preferred time" name="time" options={times} />
      </div>

      <Select label="The nature of your visit" name="interest" options={interests} defaultValue={piece ? interests[0] : undefined} />

      <div>
        <label className="font-sans text-[0.6rem] uppercase tracking-wide2 text-espresso/50">
          A note for the salon
        </label>
        <textarea
          name="note"
          rows={4}
          defaultValue={piece ? `I would like to learn more about the ${piece}.` : ""}
          placeholder="Tell us about the occasion, a stone you have in mind, or anything we should prepare."
          className="mt-3 w-full resize-none border-b border-champagne/40 bg-transparent py-3 font-serif text-lg text-espresso placeholder:text-espresso/30 focus:border-espresso focus:outline-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Request Appointment
      </button>
      <p className="font-serif text-sm leading-relaxed text-espresso/45">
        Your request is held in confidence. We never share your details, and you
        are under no obligation.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-sans text-[0.6rem] uppercase tracking-wide2 text-espresso/50">
        {label}
        {required && <span className="text-champagne-deep"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full border-b border-champagne/40 bg-transparent py-3 font-serif text-lg text-espresso placeholder:text-espresso/30 focus:border-espresso focus:outline-none"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  defaultValue,
}: {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string;
}) {
  return (
    <div>
      <label className="font-sans text-[0.6rem] uppercase tracking-wide2 text-espresso/50">
        {label}
      </label>
      <select
        name={name}
        defaultValue={defaultValue ?? ""}
        className="mt-3 w-full appearance-none border-b border-champagne/40 bg-transparent py-3 font-serif text-lg text-espresso focus:border-espresso focus:outline-none"
      >
        <option value="" disabled>
          Please select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-espresso">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
