import {
  CreditCard,
  CalendarDays,
  CheckCircle,
  Receipt,
  ArrowUpCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";

const invoices = [
  {
    id: "#INV-1001",
    date: "01 Jul 2026",
    amount: "$19.00",
    status: "Paid",
  },
  {
    id: "#INV-1000",
    date: "01 Jun 2026",
    amount: "$19.00",
    status: "Paid",
  },
  {
    id: "#INV-999",
    date: "01 May 2026",
    amount: "$19.00",
    status: "Paid",
  },
];

export default function BillingSettings() {
  return (
    <div className="space-y-8">

      {/* Current Plan */}

      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-semibold">
              Billing
            </h2>

            <p className="mt-2 text-[var(--muted)]">
              Manage your subscription and billing information.
            </p>

          </div>

          <Button>
            <ArrowUpCircle size={16} />
            Upgrade Plan
          </Button>

        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-lg border border-[var(--border)] p-5">

            <div className="flex items-center gap-3">

              <CheckCircle
                className="text-green-500"
                size={20}
              />

              <h3 className="font-semibold">
                Pro Plan
              </h3>

            </div>

            <p className="mt-3 text-sm text-[var(--muted)]">
              Unlimited projects, AI features, advanced analytics,
              and collaboration tools.
            </p>

            <p className="mt-4 text-3xl font-bold">
              $19
              <span className="text-base font-normal">
                /month
              </span>
            </p>

          </div>

          <div className="rounded-lg border border-[var(--border)] p-5 space-y-4">

            <div className="flex items-center gap-3">
              <CalendarDays size={18} />
              <span>Next Billing: 01 Aug 2026</span>
            </div>

            <div className="flex items-center gap-3">
              <CreditCard size={18} />
              <span>Visa **** 4242</span>
            </div>

            <div className="flex items-center gap-3">
              <Receipt size={18} />
              <span>Monthly Billing</span>
            </div>

          </div>

        </div>

      </div>

      {/* Billing History */}

      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">

        <h2 className="mb-6 text-xl font-semibold">
          Billing History
        </h2>

        <div className="space-y-4">

          {invoices.map((invoice) => (

            <div
              key={invoice.id}
              className="flex items-center justify-between rounded-lg border border-[var(--border)] p-4"
            >

              <div>

                <h3 className="font-medium">
                  {invoice.id}
                </h3>

                <p className="text-sm text-[var(--muted)]">
                  {invoice.date}
                </p>

              </div>

              <div className="text-right">

                <p className="font-semibold">
                  {invoice.amount}
                </p>

                <span className="text-sm text-green-500">
                  {invoice.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}