
// data/offerings.js — Single source of truth for packages & services
window.OFFERINGS = {
  packages: [
    { id: "triage", tier: "Starter", title: "Mini Triage & Roadmap", badge: "Credited", price: 99, currency: "USD", blurb: "30-min call, micro-audit of 2 files, and a 1-page plan with fixed-price options.", cta: "Book for $99.", paylink: "https://buy.stripe.com/test_123" },
    { id: "clean-merge", tier: "Most popular", title: "Clean & Merge", price: 249, currency: "USD", blurb: "Up to 2 files (≤10k rows). Dedupe, normalize dates/text, standardize categories. Tidy CSV/XLSX + Data Dictionary.", cta: "Start Clean & Merge", paylink: "https://buy.stripe.com/test_456" },
    { id: "report", tier: "Report-ready", title: "Answers and Insights", price: 349, currency: "USD", blurb: "Clean up data and create a 1-3 page PDF report with visualizations provided as separate images. Report can show KPIs, summaries, trends, and comparisons and highlights based on your organization's needs.", cta: "Request a Report", paylink: "https://buy.stripe.com/test_999" },
    { id: "dashboard", tier: "Interactive Insights", title: "Interactive Dashboard", price: 649, currency: "USD", blurb: "One-page view with KPIs, trends, Top 10 and simple filters. No macros required.", cta: "Get the Dashboard", paylink: "https://buy.stripe.com/test_789" }
  ],
  services: [
    { group: "Triage", items: ["30-60 minute video call data review", "1-page Recommendation Roadmap", "Quick Wins"] }, 
    { group: "Data Clean-Up", items: ["Deduplicate by email/ID", "Normalize dates and casing", "Standardize categories", "Split/merge columns", "File merges"] },
    { group: "Reports", items: ["1-3 page PDF Report", "Charts and Visualization images", "KPIs", "Trends", "Top 10"] }, 
    { group: "Dashboards", items: ["Interactive dashboard", "KPIs", "Trends",  "Top 10", "Simple filters", "PDF exports"] },
    { group: "Auto-Refresh", items: ["Power Query / Sheets formulas", "Validation to prevent errors", "Written refresh instructions", "Video walkthrough of instructions"] },
    { group: "Add-ons", items: ["Forecast tab", "PDF report layout", "Form for new rows", "Email summaries"] }
  ],
  engagements: [
    ["Mini Triage & Roadmap", "Unclear scope; want quick plan + quick win", "$99 (credited)"],
    ["Clean & Merge", "Messy exports; need tidy dataset", "$249"],
    ["Report", "Executives need a one-pager; preparing for a meeting", "$349"],
    ["Dashboard", "Users need to evaluate the data", "$649"],
    ["Monthly Maintenance", "Recurring updates/checks", "$149–$349/mo"]
  ]
};
