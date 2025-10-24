
// data/offerings.js — Single source of truth for packages & services
window.OFFERINGS = {
  packages: [
    { id: "triage", tier: "Starter", title: "Mini Triage & Roadmap", badge: "Credited", price: 99, currency: "USD", blurb: "30-min call, micro-audit of 2 files, and a 1-page plan with fixed-price options.", cta: "Book for $99", paylink: "https://buy.stripe.com/test_123" },
    { id: "clean-merge", tier: "Most popular", title: "Clean & Merge", price: 299, currency: "USD", blurb: "Up to 2 files (≤10k rows). Dedupe, normalize dates/text, standardize categories. Tidy CSV/XLSX + Data Dictionary.", cta: "Start Clean & Merge", paylink: "https://buy.stripe.com/test_456" },
    { id: "dashboard", tier: "Report-ready", title: "Sales/Donor Dashboard", price: 649, currency: "USD", blurb: "One-page view with KPIs, 12-month trend, Top 10 and simple filters. No macros required.", cta: "Get the Dashboard", paylink: "https://buy.stripe.com/test_789" }
  ],
  services: [
    { group: "Data Clean-Up", items: ["Deduplicate by email/ID", "Normalize dates and casing", "Standardize categories", "Split/merge columns"] },
    { group: "Dashboards", items: ["Excel/Sheets one-pager", "Last-12 trend + Top 10", "Simple filters", "PDF exports"] },
    { group: "Auto-Refresh", items: ["Power Query / Sheets formulas", "Validation to prevent errors", "Refresh instructions"] },
    { group: "Add-ons", items: ["Forecast tab", "PDF report layout", "Form for new rows", "Email summaries"] }
  ],
  engagements: [
    ["Mini Triage & Roadmap", "Unclear scope; want quick plan + quick win", "$99 (credited)"],
    ["Clean & Merge", "Messy exports; need tidy dataset", "$299"],
    ["Dashboard", "Executives need a one-pager", "$649"],
    ["Monthly Maintenance", "Recurring updates/checks", "$149–$349/mo"]
  ]
};
