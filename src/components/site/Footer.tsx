import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-muted">
      <div className="container-narrow py-20 grid gap-12 grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-9 w-9 bg-primary text-primary-foreground font-black text-lg">H</span>
            <span className="font-black text-lg tracking-tighter uppercase">Hull Driving School</span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Professional driving tuition for Hull and East Riding since 1989. DVSA Approved instructors. Modern dual-control fleet.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-6">Lessons</h4>
          <ul className="space-y-4 text-[11px] font-black uppercase tracking-[0.15em]">
            <li><Link to="/lessons" className="hover:text-success transition-colors">Beginner</Link></li>
            <li><Link to="/pass-plus" className="hover:text-success transition-colors">Pass Plus</Link></li>
            <li><Link to="/refresher" className="hover:text-success transition-colors">Refresher</Link></li>
            <li><Link to="/private-hire-test" className="hover:text-success transition-colors">Private Hire</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-6">School</h4>
          <ul className="space-y-4 text-[11px] font-black uppercase tracking-[0.15em]">
            <li><Link to="/about" className="hover:text-success transition-colors">About</Link></li>
            <li><Link to="/areas-covered" className="hover:text-success transition-colors">Areas</Link></li>
            <li><Link to="/reviews" className="hover:text-success transition-colors">Reviews</Link></li>
            <li><Link to="/prices" className="hover:text-success transition-colors">Prices</Link></li>
            <li><Link to="/faqs" className="hover:text-success transition-colors">FAQs</Link></li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-4 border-t-2 border-foreground pt-8 grid sm:grid-cols-2 gap-6 items-start">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm font-bold">
              <li><a href="tel:01482647786" className="hover:text-success transition-colors">01482 647786</a></li>
              <li><a href="sms:07971867026" className="hover:text-success transition-colors">07971 867026 (text / WhatsApp)</a></li>
              <li><a href="mailto:hulldrivingschool@gmail.com" className="hover:text-success transition-colors break-all">hulldrivingschool@gmail.com</a></li>
            </ul>
          </div>
          <p className="text-xs text-muted-foreground sm:text-right">DVSA Approved Driving Instructors. Fully insured.</p>
        </div>
      </div>
      <div className="border-t-2 border-foreground bg-background">
        <div className="container-narrow py-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground">
          <p>© {new Date().getFullYear()} Hull Driving School</p>
          <p>Hull and East Riding, UK</p>
          <p>Web design in Hull by Swift7</p>
        </div>
      </div>
    </footer>
  );
}
