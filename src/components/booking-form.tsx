"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { maisonContact } from "@/lib/maison";
import { useDictionary } from "@/i18n/i18n-provider";

export function BookingForm() {
  const dict = useDictionary();
  const form = dict.booking.form;
  const params = useSearchParams();
  const piece = params.get("piece") ?? "";
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-champagne/40 bg-ivory p-10 text-center md:p-16">
        <p className="eyebrow">{form.submittedEyebrow}</p>
        <h3 className="mt-6 font-display text-3xl text-espresso md:text-4xl">
          {form.submittedTitle}
        </h3>
        <p className="mx-auto mt-5 max-w-md font-serif text-lg leading-relaxed text-espresso/65">
          {form.submittedBody}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="link-underline mt-8 font-sans text-[0.66rem] uppercase tracking-wide2 text-champagne-deep"
        >
          {form.anotherRequest}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const el = e.currentTarget;
        const data = new FormData(el);

        const lines = [
          `${form.firstName}: ${data.get("first")} ${data.get("last")}`,
          `${form.email}: ${data.get("email")}`,
          data.get("phone") ? `${form.telephone}: ${data.get("phone")}` : null,
          `${form.preferredSalon}: ${data.get("salon")}`,
          data.get("date") ? `${form.preferredDate}: ${data.get("date")}` : null,
          data.get("time") ? `${form.preferredTime}: ${data.get("time")}` : null,
          `${form.visitNature}: ${data.get("interest")}`,
          piece ? `${dict.common.regarding}: ${piece}` : null,
          data.get("note") ? `\n${form.noteLabel}:\n${data.get("note")}` : null,
        ]
          .filter(Boolean)
          .join("\n");

        const subject = encodeURIComponent(
          `${form.mailSubject} — ${data.get("first")} ${data.get("last")}`
        );
        const body = encodeURIComponent(lines);
        window.location.href = `mailto:${maisonContact.email}?subject=${subject}&body=${body}`;

        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="space-y-9"
    >
      {piece && (
        <div className="flex items-center justify-between border border-champagne/40 bg-champagne/10 px-5 py-4">
          <span className="font-sans text-[0.6rem] uppercase tracking-wide2 text-espresso/50">
            {dict.common.regarding}
          </span>
          <span className="font-serif text-lg text-espresso">{piece}</span>
        </div>
      )}

      <div className="grid gap-9 sm:grid-cols-2">
        <Field label={form.firstName} name="first" required />
        <Field label={form.lastName} name="last" required />
        <Field label={form.email} name="email" type="email" required />
        <Field label={form.telephone} name="phone" type="tel" />
      </div>

      <Select label={form.preferredSalon} name="salon" options={form.salons} required />

      <div className="grid gap-9 sm:grid-cols-2">
        <Field label={form.preferredDate} name="date" type="date" />
        <Select label={form.preferredTime} name="time" options={form.times} />
      </div>

      <Select
        label={form.visitNature}
        name="interest"
        options={form.interests}
        defaultValue={piece ? form.interests[0] : undefined}
        required
      />

      <div>
        <label className="font-sans text-[0.6rem] uppercase tracking-wide2 text-espresso/50">
          {form.noteLabel}
        </label>
        <textarea
          name="note"
          rows={4}
          defaultValue={piece ? form.noteDefault.replace("{piece}", piece) : ""}
          placeholder={form.notePlaceholder}
          className="mt-3 w-full resize-none border-b border-champagne/40 bg-transparent py-3 font-serif text-lg text-espresso placeholder:text-espresso/30 focus:border-espresso focus:outline-none"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        {dict.cta.requestAppointment}
      </button>
      <p className="font-serif text-sm leading-relaxed text-espresso/45">
        {form.privacy}
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
  required,
  pleaseSelect,
}: {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string;
  required?: boolean;
  pleaseSelect?: string;
}) {
  const dict = useDictionary();

  return (
    <div>
      <label className="font-sans text-[0.6rem] uppercase tracking-wide2 text-espresso/50">
        {label}
        {required && <span className="text-champagne-deep"> *</span>}
      </label>
      <select
        name={name}
        defaultValue={defaultValue ?? ""}
        required={required}
        className="mt-3 w-full appearance-none border-b border-champagne/40 bg-transparent py-3 font-serif text-lg text-espresso focus:border-espresso focus:outline-none"
      >
        <option value="" disabled>
          {pleaseSelect ?? dict.common.pleaseSelect}
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
