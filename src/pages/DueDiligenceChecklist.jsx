import { useEffect } from 'react'
import { COLORS, FONTS } from '../constants'

function DueDiligenceChecklist() {
  useEffect(() => {
    document.title = 'Due Diligence Checklist - Ruebok'
  }, [])

  return (
    <div className="min-h-screen dark-grid pt-[70px]" style={{ backgroundColor: COLORS.dark }}>
      {/* Hero Section */}
      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-[56px] font-bold text-white mb-6">The Due Diligence Checklist</h1>
          <p className="text-[24px] mb-8" style={{ color: COLORS.primary, fontFamily: FONTS.heading }}>
            The Exam You Can Study For
          </p>
          <p className="text-[18px] text-gray-300 leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
            Term sheets are exciting, but Due Diligence is where deals die. Once an investor says "Yes," they hand you over to their lawyers to find a reason to say "No."
          </p>
          <p className="text-[18px] text-gray-300 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
            If your data room is messy, you look risky. If it is organized, you look like a professional. This checklist organizes the chaos into 5 standard folders, turning a 3-month audit into a 2-week formality.
          </p>
        </div>
      </section>

      {/* The Must-Haves Section */}
      <section className="px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-bold text-white mb-8">The "Must-Haves" (Folder Structure)</h2>
          <p className="text-gray-300 text-base mb-8 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
            We organize your Due Diligence into these 5 critical buckets. If these aren't ready, do not send the link.
          </p>

          <div className="space-y-8">
            {/* Folder 1 */}
            <div className="border-l-4 pl-6" style={{ borderColor: COLORS.primary }}>
              <h3 className="text-[24px] font-bold text-white mb-3">Folder 01: Corporate Structure (The Foundation)</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
                Lawyers check this first. If the foundation is cracked, they won't inspect the house.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                <li>• <span className="font-bold">Certificate of Incorporation:</span> The birth certificate of your company.</li>
                <li>• <span className="font-bold">The Cap Table:</span> Who owns what? This must match your pitch deck exactly. If there is a 1% discrepancy, the deal pauses.</li>
                <li>• <span className="font-bold">Stock Purchase Agreements:</span> Proof that founders actually own their shares (and that they vest over time).</li>
              </ul>
            </div>

            {/* Folder 2 */}
            <div className="border-l-4 pl-6" style={{ borderColor: COLORS.primary }}>
              <h3 className="text-[24px] font-bold text-white mb-3">Folder 02: Intellectual Property (The Asset)</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
                For tech startups, this is the most dangerous folder. You must prove you own your code.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                <li>• <span className="font-bold">IP Assignment Agreements:</span> Every employee, freelancer, and intern who wrote code must have signed this.</li>
                <li className="text-red-400">
                  <span className="font-bold">Ruebok Warning:</span> If you paid a dev shop in Ukraine and didn't get this signed, you do not own your product.
                </li>
                <li>• <span className="font-bold">Patents & Trademarks:</span> Filings for your brand and tech.</li>
                <li>• <span className="font-bold">Open Source Report:</span> A list of all open-source libraries used (to ensure you haven't accidentally open-sourced your proprietary code).</li>
              </ul>
            </div>

            {/* Folder 3 */}
            <div className="border-l-4 pl-6" style={{ borderColor: COLORS.primary }}>
              <h3 className="text-[24px] font-bold text-white mb-3">Folder 03: Financials (The Receipts)</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
                Do your bank statements back up your claims?
              </p>
              <ul className="space-y-2 text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                <li>• <span className="font-bold">P&L and Balance Sheet:</span> Monthly breakdown for the last 2 years.</li>
                <li>• <span className="font-bold">Bank Statements:</span> Investors will spot-check these against your revenue claims.</li>
                <li>• <span className="font-bold">Debt Schedule:</span> List of all convertible notes, SAFEs, and loans.</li>
                <li className="text-red-400">
                  <span className="font-bold">Warning:</span> Hiding debt kills trust instantly.
                </li>
              </ul>
            </div>

            {/* Folder 4 */}
            <div className="border-l-4 pl-6" style={{ borderColor: COLORS.primary }}>
              <h3 className="text-[24px] font-bold text-white mb-3">Folder 04: Material Contracts (The Liabilities)</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
                Who else has a claim on your business?
              </p>
              <ul className="space-y-2 text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                <li>• <span className="font-bold">Customer Contracts:</span> Specifically, agreements with your top 5 clients. Lawyers look for "Change of Control" clauses (which let clients leave if you get acquired).</li>
                <li>• <span className="font-bold">Vendor Contracts:</span> Long-term commitments (e.g., a 3-year AWS contract or office lease).</li>
              </ul>
            </div>

            {/* Folder 5 */}
            <div className="border-l-4 pl-6" style={{ borderColor: COLORS.primary }}>
              <h3 className="text-[24px] font-bold text-white mb-3">Folder 05: HR & Employees (The Team)</h3>
              <ul className="space-y-2 text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                <li>• <span className="font-bold">Employment Agreements:</span> Signed contracts for all staff.</li>
                <li>• <span className="font-bold">Non-Compete / Non-Solicit:</span> Clauses that prevent your sales lead from stealing your clients if they quit.</li>
                <li>• <span className="font-bold">Contractor Agreements:</span> Proof that your contractors are not legally "employees" (which would create a tax liability).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Killers Section */}
      <section className="px-8 py-12" style={{ backgroundColor: COLORS.darkerGray }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-bold text-white mb-8">The "Deal Killers" (Red Flags)</h2>
          <p className="text-gray-300 text-base mb-8 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
            Investors can forgive a bad quarter. They cannot forgive these three things.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-[20px] font-bold text-red-500 mb-2">1. The "Handshake" Equity Deal</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2" style={{ fontFamily: FONTS.mono }}>
                <span className="font-bold" style={{ color: COLORS.primary }}>The Scenario:</span> "My co-founder owns 10%, but we never wrote it down."
              </p>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                <span className="font-bold" style={{ color: COLORS.primary }}>The Result:</span> No investor will wire money until this is legally resolved, often causing the co-founder to hold the deal hostage for more cash.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-red-500 mb-2">2. Co-mingled Funds</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2" style={{ fontFamily: FONTS.mono }}>
                <span className="font-bold" style={{ color: COLORS.primary }}>The Scenario:</span> You used the company credit card to buy personal groceries or pay rent.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                <span className="font-bold" style={{ color: COLORS.primary }}>The Result:</span> This "pierces the corporate veil," making you personally liable for company lawsuits. It screams "amateur."
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-red-500 mb-2">3. Missing IP Signatures</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2" style={{ fontFamily: FONTS.mono }}>
                <span className="font-bold" style={{ color: COLORS.primary }}>The Scenario:</span> Your MVP was built by a contractor 2 years ago, and you can't find their contract.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                <span className="font-bold" style={{ color: COLORS.primary }}>The Result:</span> The investor walks away. They cannot invest in a company that might get sued by a former developer claiming they own the tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-bold text-white mb-8">The Process</h2>
          <p className="text-gray-300 text-base mb-8 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
            How to handle the request when it comes.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-[20px] font-bold mb-2" style={{ color: COLORS.primary }}>Build the Room Early</h3>
              <p className="text-gray-400 text-base leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                Create a Google Drive or Dropbox with these 5 folders before you start fundraising.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold mb-2" style={{ color: COLORS.primary }}>Tiered Access</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-3" style={{ fontFamily: FONTS.mono }}>
                Do not give everyone everything.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                <li>• <span className="font-bold">Stage 1 (Interest):</span> Send the Deck and high-level P&L.</li>
                <li>• <span className="font-bold">Stage 2 (Term Sheet):</span> Open the full Data Room.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[20px] font-bold mb-2" style={{ color: COLORS.primary }}>Never Delete</h3>
              <p className="text-gray-400 text-base leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                Once you send a link, do not delete files to "hide" them. If you made a mistake, upload a new version labeled "v2 - CORRECTED" and explain why. Transparency wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="px-8 py-16" style={{ backgroundColor: COLORS.darkerGray }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[32px] font-bold text-white mb-4">Ready to Prepare Your Data Room?</h2>
          <p className="text-gray-400 text-lg mb-8" style={{ fontFamily: FONTS.mono }}>
            Download the checklist with pre-structured folders to get started.
          </p>
          <button
            className="px-10 py-4 text-white font-bold uppercase text-base transition-colors rounded"
            style={{ backgroundColor: COLORS.primary }}
            onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.primaryHover}
            onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.primary}
          >
            DOWNLOAD CHECKLIST
          </button>
        </div>
      </section>

      {/* Bottom padding */}
      <div className="h-16"></div>
    </div>
  )
}

export default DueDiligenceChecklist
