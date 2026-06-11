import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  phone: z.string().trim().min(7, "Please add a contact number").max(30),
  email: z.string().trim().email("Enter a valid email").max(255).or(z.literal("")),
  postcode: z.string().trim().max(20).optional().or(z.literal("")),
  service: z.enum(["Beginner lessons", "Pass Plus", "Refresher", "Motorway", "Private Hire test"]),
  driven: z.enum(["Yes", "No"]),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof Errors;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const v = parsed.data;
    const subject = encodeURIComponent(`Lesson enquiry — ${v.service}`);
    const body = encodeURIComponent(
      `Name: ${v.name}\nPhone: ${v.phone}\nEmail: ${v.email}\nPostcode/Area: ${v.postcode ?? ""}\nService: ${v.service}\nDriven before: ${v.driven}\n\n${v.message ?? ""}`
    );
    window.location.href = `mailto:hulldrivingschool@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field = "w-full h-11 px-3 rounded-[12px] border border-border bg-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15";

  if (sent) {
    return (
      <div className="card-surface p-6">
        <h3>Thanks. Your message is ready to send.</h3>
        <p className="mt-2 text-muted-foreground">Your email app should have opened with your details. If it didn't, call <a href="tel:01482647786" className="text-primary underline">01482 647786</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card-surface p-6 grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Full name</span>
          <input name="name" required className={field} autoComplete="name" />
          {errors.name && <span className="text-destructive text-xs">{errors.name}</span>}
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Phone</span>
          <input name="phone" required inputMode="tel" className={field} autoComplete="tel" />
          {errors.phone && <span className="text-destructive text-xs">{errors.phone}</span>}
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Email <span className="text-muted-foreground font-normal">(optional)</span></span>
          <input name="email" type="email" className={field} autoComplete="email" />
          {errors.email && <span className="text-destructive text-xs">{errors.email}</span>}
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Postcode or area of Hull</span>
          <input name="postcode" className={field} placeholder="e.g. HU7 or Bransholme" />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Which service</span>
          <select name="service" defaultValue="Beginner lessons" className={field}>
            <option>Beginner lessons</option>
            <option>Pass Plus</option>
            <option>Refresher</option>
            <option>Motorway</option>
            <option>Private Hire test</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="font-medium">Have you driven before?</span>
          <select name="driven" defaultValue="No" className={field}>
            <option>No</option>
            <option>Yes</option>
          </select>
        </label>
      </div>
      <label className="grid gap-1.5 text-sm">
        <span className="font-medium">Message</span>
        <textarea name="message" rows={4} maxLength={1000} className={`${field} h-auto py-3`} placeholder="Anything we should know (preferred days, pick-up location, goals)" />
      </label>
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button type="submit" className="btn-primary">Send enquiry</button>
        <span className="text-sm text-muted-foreground">Prefer to talk? Call <a href="tel:01482647786" className="text-primary">01482 647786</a>.</span>
      </div>
    </form>
  );
}
