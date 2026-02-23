"use client";

import { useState, FormEvent } from "react";
import SiteLayout from "@/components/SiteLayout";

const intentOptions = [
  {
    key: "sovereign",
    label: "Sovereign Mandate",
    sub: "State & Public Interests",
  },
  {
    key: "private",
    label: "Private Capital",
    sub: "UHNW & Direct Investment",
  },
  {
    key: "institutional",
    label: "Institutional",
    sub: "M&A / Structured Finance",
  },
];

const regionalHQs = [
  {
    region: "Americas",
    name: "Maykott Wall Street",
    address: "28 Liberty St, New York, NY 10005",
    phone: "+1 212 555 0198",
  },
  {
    region: "EMEA",
    name: "Maykott Mayfair",
    address: "15 Berkeley St, London W1J 8DY",
    phone: "+44 20 7946 0143",
  },
  {
    region: "APAC",
    name: "Maykott Marina Bay",
    address: "10 Marina Blvd, Singapore 018983",
    phone: "+65 6713 0192",
  },
  {
    region: "Switzerland",
    name: "Maykott Private Wealth",
    address: "Bahnhofstrasse 45, 8001 Zürich",
    phone: "+41 44 211 0122",
  },
];

export default function ContactPage() {
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <SiteLayout>
      <main className="pt-16 pb-20 px-6">
        <div className="w-container max-w-none mx-auto px-0 md:px-0">
          {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[1px] w-8 bg-primary" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/60">
                  Confidential Protocol
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
                Strategic <br />{" "}
                <span className="text-primary/20">Inquiry</span> Portal
              </h1>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-lg text-primary/60 leading-relaxed font-light">
                Formal engagement for sovereign, institutional, and private
                capital interests. All transmissions are encrypted under Tier-1
                security protocols.
              </p>
            </div>
          </div>

          {/* ═════════════════════ MAIN INTERFACE GRID ═══════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-primary/10 pt-16">
            {/* ══════════ INQUIRY FORM ══════════ */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <div className="size-20 bg-primary rounded-full flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-accent-gold text-4xl">
                      check
                    </span>
                  </div>
                  <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
                    Protocol Initiated
                  </h2>
                  <p className="text-primary/60 text-lg mb-8 max-w-md">
                    Your inquiry has been received and encrypted. A member of
                    our acquisitions desk will respond within 24 hours.
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary/30">
                    Reference: MK-{Math.floor(Math.random() * 90000) + 10000}-G
                  </p>
                </div>
              ) : (
                <section aria-label="Strategic Inquiry Form">
                  <div className="flex items-center justify-between mb-10">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em]">
                      Consultative Intake
                    </h2>
                    <span className="text-[10px] font-medium text-primary/40 uppercase">
                      Step 01 / 04
                    </span>
                  </div>

                  <form
                    className="space-y-12"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    {/* Principal Fields */}
                    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-8 border-0 p-0 m-0">
                      <legend className="sr-only">Principal Information</legend>
                      <div className="space-y-2">
                        <label
                          htmlFor="full-name"
                          className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                        >
                          Full Legal Name
                        </label>
                        <input
                          id="full-name"
                          type="text"
                          required
                          placeholder="Principal or Authorized Representative"
                          className="form-input-underline"
                          aria-required="true"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="organization"
                          className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                        >
                          Organization
                        </label>
                        <input
                          id="organization"
                          type="text"
                          required
                          placeholder="Institution / Family Office"
                          className="form-input-underline"
                          aria-required="true"
                        />
                      </div>
                    </fieldset>

                    {/* Email & Phone */}
                    <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-8 border-0 p-0 m-0">
                      <legend className="sr-only">Contact Information</legend>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                        >
                          Professional Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="name@institution.com"
                          className="form-input-underline"
                          aria-required="true"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                        >
                          Contact Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+1 212 555 0198"
                          className="form-input-underline"
                        />
                      </div>
                    </fieldset>

                    {/* Intent Selection */}
                    <fieldset className="space-y-6 border-0 p-0 m-0">
                      <legend className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
                        Nature of Strategic Intent
                      </legend>
                      <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        role="radiogroup"
                        aria-label="Select engagement type"
                      >
                        {intentOptions.map((option) => (
                          <button
                            key={option.key}
                            type="button"
                            role="radio"
                            aria-checked={selectedIntent === option.key}
                            onClick={() => setSelectedIntent(option.key)}
                            className={`border p-4 text-left transition-all ${
                              selectedIntent === option.key
                                ? "border-primary bg-primary text-white"
                                : "border-primary/10 hover:border-primary"
                            }`}
                          >
                            <span className="block text-[11px] font-bold uppercase tracking-tighter">
                              {option.label}
                            </span>
                            <span className="block text-[9px] opacity-60 mt-1 uppercase">
                              {option.sub}
                            </span>
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    {/* Regional Focus */}
                    <div className="space-y-2">
                      <label
                        htmlFor="region"
                        className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                      >
                        Asset Class / Regional Focus
                      </label>
                      <select
                        id="region"
                        className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary py-3 px-0 text-sm text-primary appearance-none cursor-pointer outline-none"
                      >
                        <option value="">Select Operational Region</option>
                        <option value="emea">EMEA - Eurozone Focus</option>
                        <option value="apac">
                          APAC - Maritime Southeast Asia
                        </option>
                        <option value="americas">
                          Americas - North American Markets
                        </option>
                        <option value="global">Global / Multi-Region</option>
                      </select>
                    </div>

                    {/* Inquiry Summary */}
                    <div className="space-y-2">
                      <label
                        htmlFor="inquiry-summary"
                        className="text-[10px] font-bold uppercase tracking-widest text-primary/50 block"
                      >
                        Summary of Inquiry
                      </label>
                      <textarea
                        id="inquiry-summary"
                        rows={4}
                        placeholder="Briefly outline the objective of the mandate..."
                        className="w-full bg-transparent border-0 border-b border-primary/20 focus:border-primary py-3 px-0 text-sm placeholder:text-primary/20 resize-none outline-none transition-colors"
                        required
                        aria-required="true"
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-primary/40">
                        <span
                          className="material-symbols-outlined text-sm"
                          aria-hidden="true"
                        >
                          lock
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-widest">
                          AES-256 Encrypted Session
                        </span>
                      </div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center gap-4 group hover:text-accent-gold transition-colors disabled:opacity-50"
                        aria-label="Submit inquiry"
                      >
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] group-hover:mr-2 transition-all">
                          {isLoading ? "Initiating..." : "Initiate Protocol"}
                        </span>
                        <span
                          className="material-symbols-outlined"
                          aria-hidden="true"
                        >
                          {isLoading ? "hourglass_empty" : "trending_flat"}
                        </span>
                      </button>
                    </div>
                  </form>
                </section>
              )}
            </div>

            {/* ══════════ RIGHT SIDEBAR ══════════ */}
            <div className="lg:col-span-5 space-y-16">
              {/* Global Footprint Map */}
              <div className="bg-white border border-primary/5 p-8 dot-grid relative overflow-hidden h-[380px]">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em]">
                      Global Footprint
                    </h3>
                    <p className="text-[10px] text-primary/50 uppercase tracking-widest">
                      Real-time Operational Status:{" "}
                      <span className="text-green-500 font-bold">Active</span>
                    </p>
                  </div>

                  {/* Simulated Map Dots */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center" />
                  </div>

                  {[
                    {
                      top: "33%",
                      left: "24%",
                      label: "New York HQ",
                      active: true,
                    },
                    {
                      top: "26%",
                      left: "50%",
                      label: "London HQ",
                      active: true,
                    },
                    {
                      top: "60%",
                      left: "74%",
                      label: "Singapore HQ",
                      active: true,
                    },
                    {
                      top: "25%",
                      left: "55%",
                      label: "Dubai HQ",
                      active: false,
                    },
                  ].map((hub) => (
                    <div
                      key={hub.label}
                      className="absolute pulse-dot"
                      style={{ top: hub.top, left: hub.left }}
                      title={hub.label}
                      aria-label={hub.label}
                    >
                      <div
                        className={`size-3 rounded-full ${
                          hub.active ? "bg-primary" : "bg-primary/50"
                        } relative border-2 border-white shadow`}
                      />
                    </div>
                  ))}

                  <div className="flex justify-between items-end">
                    <div className="space-y-2 bg-white/80 backdrop-blur-sm p-3">
                      {[
                        { city: "London Node", active: true },
                        { city: "Singapore Node", active: true },
                        { city: "New York Node", active: true },
                      ].map((node) => (
                        <div
                          key={node.city}
                          className="flex items-center gap-2"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              node.active ? "bg-green-500" : "bg-yellow-500"
                            }`}
                            aria-hidden="true"
                          />
                          <span className="text-[9px] font-bold uppercase tracking-widest">
                            {node.city}: Open
                          </span>
                        </div>
                      ))}
                    </div>
                    <span className="text-[8px] font-mono opacity-40">
                      LAT: 51.5074 N
                    </span>
                  </div>
                </div>
              </div>

              {/* Regional HQ Directory */}
              <div className="space-y-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 border-b border-primary/10 pb-4">
                  Regional HQs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {regionalHQs.map((hq) => (
                    <address key={hq.region} className="not-italic space-y-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest">
                        {hq.region}
                      </p>
                      <div className="text-[11px] leading-relaxed space-y-1">
                        <p className="font-bold">{hq.name}</p>
                        <p className="text-primary/60">{hq.address}</p>
                        <a
                          href={`tel:${hq.phone.replace(/\s/g, "")}`}
                          className="text-primary/60 hover:text-accent-gold transition-colors"
                        >
                          {hq.phone}
                        </a>
                      </div>
                    </address>
                  ))}
                </div>

                {/* Direct Email */}
                <div className="pt-8 border-t border-primary/10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 mb-4">
                    Direct Email
                  </p>
                  <a
                    href="mailto:inquiry@maykott.com"
                    className="text-sm font-bold text-primary hover:text-accent-gold transition-colors block mb-2"
                  >
                    inquiry@maykott.com
                  </a>
                  <a
                    href="mailto:press@maykott.com"
                    className="text-sm font-bold text-primary/40 hover:text-accent-gold transition-colors block"
                  >
                    press@maykott.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
