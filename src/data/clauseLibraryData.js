export const clauseCategories = {
  A: "A",
  B: "B",
  C: "C",
  D: "D",
  E: "E",
  F: "F",
  G: "G",
  H: "H",
  I: "I",
  L: "L",
  M: "M",
  N: "N",
  O: "O",
  P: "P",
  R: "R",
  S: "S",
  T: "T",
  U: "U-W"
};

export const clauses = [
  {
    id: 1,
    category: "A",
    name: "Acceleration Clause",
    definition: "Makes entire debt immediately due upon default",
    scenario: "A tech startup takes a $10M loan to fund expansion. When they miss two quarterly payments due to delayed customer contracts, the lender invokes this clause to demand immediate repayment of the full outstanding balance, protecting their interests against further deterioration."
  },
  {
    id: 2,
    category: "A",
    name: "Acceptance Testing Clause",
    definition: "Defines criteria for accepting deliverables",
    scenario: "A Fortune 500 company commissions custom ERP software. This clause specifies that the software must process 10,000 transactions per minute with 99.9% accuracy during a 30-day testing period before final payment is released."
  },
  {
    id: 3,
    category: "A",
    name: "Accordion Feature",
    definition: "Allows increase in credit facility size",
    scenario: "A retail chain with a $50M credit facility anticipates higher inventory needs for holiday season. They use this clause to temporarily increase their facility to $75M without renegotiating the entire agreement."
  },
  {
    id: 4,
    category: "A",
    name: "Advertising Fee Clause",
    definition: "Allocates advertising costs in franchises",
    scenario: "A new McDonald's franchisee must contribute 4% of gross sales to the national advertising fund, ensuring consistent brand promotion across all locations while sharing costs proportionally."
  },
  {
    id: 5,
    category: "A",
    name: "Affirmative Covenant",
    definition: "Requires specific actions by borrower",
    scenario: "A manufacturing company receiving acquisition financing must maintain comprehensive insurance, provide monthly financial statements, and keep a minimum cash balance of $5M throughout the loan term."
  },
  {
    id: 6,
    category: "A",
    name: "Anti-Assignment Provision",
    definition: "Restricts contract transfer rights",
    scenario: "A biotech firm licenses proprietary technology to a pharmaceutical company. This clause prevents the pharma company from transferring the license to competitors if they're acquired, protecting the biotech's intellectual property."
  },
  {
    id: 7,
    category: "A",
    name: "Anti-Bribery Clause",
    definition: "Ensures compliance with anti-corruption laws",
    scenario: "A U.S. construction company partnering with firms in countries with high corruption risk includes this clause to ensure all parties comply with the Foreign Corrupt Practices Act, avoiding potential criminal liability."
  },
  {
    id: 8,
    category: "A",
    name: "Anti-Competitive Provision",
    definition: "Prevents anti-competitive behavior",
    scenario: "Two competing software companies form a joint venture for a government project. This clause ensures neither party uses shared information to undercut the other in separate competitive bids."
  },
  {
    id: 9,
    category: "A",
    name: "Anti-Dilution Clause",
    definition: "Protects investor ownership percentage",
    scenario: "An early investor owns 20% of a startup. When the company later issues shares at a lower valuation, this clause adjusts their share count upward to maintain their percentage ownership despite the down round."
  },
  {
    id: 10,
    category: "A",
    name: "Anti-Dilution Provision",
    definition: "Maintains shareholder proportional ownership",
    scenario: "A venture capital firm invests $5M for 25% equity. When the startup raises emergency funding at half the previous valuation, this provision protects the VC from excessive dilution by adjusting their conversion price."
  },
  {
    id: 11,
    category: "A",
    name: "Anti-Sandbagging Provision",
    definition: "Limits claims for known breaches",
    scenario: "During due diligence, a buyer discovers unreported environmental contamination but proceeds with closing. This clause prevents them from later claiming indemnification for issues they knew about pre-closing."
  },
  {
    id: 12,
    category: "A",
    name: "Arbitration Clause",
    definition: "Mandates arbitration for disputes",
    scenario: "Two tech giants entering a patent cross-licensing agreement include this clause to resolve disputes through JAMS arbitration in Silicon Valley, avoiding lengthy public court battles that could reveal trade secrets."
  },
  {
    id: 13,
    category: "A",
    name: "Arbitration Provision",
    definition: "Alternative dispute resolution mechanism",
    scenario: "An international supply agreement between a U.S. retailer and Chinese manufacturer specifies ICC arbitration in Singapore, providing a neutral forum acceptable to both parties."
  },
  {
    id: 14,
    category: "A",
    name: "Asset Purchase Agreement (APA)",
    definition: "Framework for asset acquisitions",
    scenario: "A restaurant chain in bankruptcy sells its best-performing locations to a competitor. The APA details exactly which equipment, lease rights, and intellectual property transfer while leaving liabilities with the seller."
  },
  {
    id: 15,
    category: "A",
    name: "Asset Sale Covenant",
    definition: "Restricts asset dispositions",
    scenario: "A private equity firm lending to a portfolio company includes this covenant preventing the sale of any assets worth over $1M without lender consent, protecting collateral value."
  },
  {
    id: 16,
    category: "A",
    name: "Assignment Clause",
    definition: "Governs transfer of contractual rights",
    scenario: "A software development firm working on a multi-year project for a bank includes terms allowing the bank to assign the contract to any successor if they merge, ensuring project continuity."
  },
  {
    id: 17,
    category: "A",
    name: "Assignment and Assumption",
    definition: "Transfer of rights and obligations",
    scenario: "When Amazon acquires Whole Foods, this mechanism transfers all of Whole Foods' supplier contracts to Amazon, maintaining business continuity while changing the contracting party."
  },
  {
    id: 18,
    category: "A",
    name: "Assignment of Inventions",
    definition: "IP ownership transfer to employer",
    scenario: "A Google engineer develops an innovative algorithm while employed. This clause ensures Google owns all rights to the invention, even if the engineer conceived it during personal time using company resources."
  },
  {
    id: 19,
    category: "A",
    name: "At-Will Employment Clause",
    definition: "Employment terminable by either party",
    scenario: "A startup hires a marketing director without a fixed term. Either party can end the relationship with two weeks' notice, providing flexibility as the company's needs evolve."
  },
  {
    id: 20,
    category: "A",
    name: "Attorney Fees Clause",
    definition: "Allocates legal fee responsibility",
    scenario: "In a commercial lease dispute where the tenant wrongfully withholds rent, this clause requires the losing tenant to pay the landlord's $50,000 legal bill, discouraging frivolous defenses."
  },
  {
    id: 21,
    category: "A",
    name: "Audit Provision Clause",
    definition: "Grants inspection rights",
    scenario: "A publisher paying royalties to an author includes rights to audit book sales records annually, ensuring accurate payment calculations and detecting any underreporting."
  },
  {
    id: 22,
    category: "A",
    name: "Audit Rights Clause",
    definition: "Allows financial record examination",
    scenario: "A venture capitalist investing $20M in a Series B round requires quarterly audit rights to examine the startup's burn rate and ensure funds are used as represented in the business plan."
  },
  {
    id: 23,
    category: "B",
    name: "Bill of Lading Clause",
    definition: "Shipping document terms",
    scenario: "An electronics manufacturer shipping $5M of components from Taiwan to California uses this clause to establish liability limits if cargo is damaged during ocean transit."
  },
  {
    id: 24,
    category: "B",
    name: "Breach Notification Clause",
    definition: "Requires prompt breach disclosure",
    scenario: "A cloud services provider must notify enterprise customers within 72 hours of any data breach, allowing customers to comply with their own regulatory notification requirements."
  },
  {
    id: 25,
    category: "B",
    name: "Break-Up Fee",
    definition: "Compensation for terminated M&A deals",
    scenario: "Microsoft agrees to acquire a gaming company for $10B. If regulators block the deal, Microsoft must pay a $500M break-up fee to compensate the target for lost opportunities and disruption."
  },
  {
    id: 26,
    category: "B",
    name: "Buy-Sell Agreement Clause",
    definition: "Governs ownership transfers",
    scenario: "Three partners own a medical practice equally. When one partner wants to retire, this clause requires offering shares first to remaining partners at a price determined by preset formula."
  },
  {
    id: 27,
    category: "C",
    name: "Call Option Clause",
    definition: "Right to purchase at set price",
    scenario: "A pharmaceutical company funds a biotech's drug development with a call option to acquire the company for $500M if Phase 3 trials succeed, capturing upside while limiting initial investment."
  },
  {
    id: 28,
    category: "C",
    name: "Cancellation Clause",
    definition: "Termination conditions",
    scenario: "A company signs a three-year contract with a marketing agency but includes a clause allowing cancellation with 60 days notice if the agency fails to meet quarterly performance metrics."
  },
  {
    id: 29,
    category: "C",
    name: "Cancellation Clauses",
    definition: "Contract exit provisions",
    scenario: "A gym membership agreement allows members to cancel for medical reasons with a doctor's note, balancing the gym's need for stable revenue with members' health circumstances."
  },
  {
    id: 30,
    category: "C",
    name: "Capital Contribution Clause",
    definition: "Investor funding obligations",
    scenario: "Limited partners in a real estate fund commit to contribute $100M over four years. This clause specifies timing and consequences if an LP fails to meet capital calls."
  },
  {
    id: 31,
    category: "C",
    name: "Carve-Out Provision",
    definition: "Exceptions to general provisions",
    scenario: "A non-compete agreement prohibits working for competitors but carves out an exception for the executive's existing board positions, recognizing pre-existing obligations."
  },
  {
    id: 32,
    category: "C",
    name: "Cash-Free, Debt-Free Clause",
    definition: "M&A pricing adjustment",
    scenario: "A private equity firm acquires a manufacturing company. This clause ensures the purchase price assumes the business is delivered without excess cash or debt, with adjustments made at closing."
  },
  {
    id: 33,
    category: "C",
    name: "Change Control Clauses",
    definition: "Modification procedures",
    scenario: "A $50M construction project includes a formal process where any changes over $10,000 require written approval from both the contractor and owner before work proceeds."
  },
  {
    id: 34,
    category: "C",
    name: "Change Order Clause",
    definition: "Construction contract modifications",
    scenario: "During office building construction, the tenant requests additional conference rooms. This clause outlines how to price, approve, and document the scope change without disrupting the project."
  },
  {
    id: 35,
    category: "C",
    name: "Change of Control Clause",
    definition: "Triggers upon ownership change",
    scenario: "A software company's key employees have equity that vests immediately if the company is acquired, ensuring they're rewarded for building value rather than leaving post-acquisition."
  },
  {
    id: 36,
    category: "C",
    name: "Change of Control Covenant",
    definition: "Restrictions during ownership transitions",
    scenario: "A bank lending to a family-owned business requires notification and potential loan repayment if ownership transfers outside the founding family, protecting against unknown management."
  },
  {
    id: 37,
    category: "C",
    name: "Choice of Forum Clause",
    definition: "Designates dispute jurisdiction",
    scenario: "A Delaware corporation doing business nationally requires all shareholder lawsuits be filed in Delaware Chancery Court, leveraging that court's business law expertise."
  },
  {
    id: 38,
    category: "C",
    name: "Choice of Law Clause",
    definition: "Governing law selection",
    scenario: "A Silicon Valley startup with European customers specifies California law governs all contracts, avoiding the complexity of navigating 27 different EU member state legal systems."
  },
  {
    id: 39,
    category: "C",
    name: "Choice of Law Clauses",
    definition: "Jurisdiction determination",
    scenario: "An international joint venture between Japanese and American companies selects New York law as neutral ground, providing predictable legal framework acceptable to both parties."
  },
  {
    id: 40,
    category: "C",
    name: "Class Action Waiver",
    definition: "Prohibits class action lawsuits",
    scenario: "A mobile app's terms of service require users to pursue claims individually rather than joining class actions, limiting the company's exposure to massive aggregated claims."
  },
  {
    id: 41,
    category: "C",
    name: "Clawback Provision",
    definition: "Recovery of paid compensation",
    scenario: "When a public company restates earnings downward, executives must return bonuses paid based on the inflated numbers, aligning compensation with actual performance."
  },
  {
    id: 42,
    category: "C",
    name: "Clean-Up Obligation Clause",
    definition: "Environmental remediation duties",
    scenario: "A chemical plant seller must remediate soil contamination to residential standards before closing, with $2M held in escrow until environmental clearance is obtained."
  },
  {
    id: 43,
    category: "C",
    name: "Coinsurance Clause",
    definition: "Shared insurance coverage",
    scenario: "A commercial property policy requires the owner to maintain coverage for at least 80% of replacement value. If underinsured, claim payments are reduced proportionally."
  },
  {
    id: 44,
    category: "C",
    name: "Collateral Release Clause",
    definition: "Security interest discharge",
    scenario: "As a borrower pays down a $10M equipment loan, the lender releases liens on specific machines when the outstanding balance drops below predetermined thresholds."
  },
  {
    id: 45,
    category: "C",
    name: "Common Area Maintenance Clause (CAM)",
    definition: "Shared space costs",
    scenario: "A retail tenant in a shopping mall pays their proportionate share of parking lot maintenance, security, and landscaping based on their percentage of total leasable space."
  },
  {
    id: 46,
    category: "C",
    name: "Compliance Clause",
    definition: "Regulatory adherence requirements",
    scenario: "A medical device manufacturer contracting with suppliers requires compliance with FDA regulations, ISO standards, and quality system requirements to maintain their own certifications."
  },
  {
    id: 47,
    category: "C",
    name: "Condition Precedent Clause",
    definition: "Pre-closing requirements",
    scenario: "A merger agreement requires regulatory approval, shareholder consent, and no material adverse change before the buyer is obligated to close the $500M transaction."
  },
  {
    id: 48,
    category: "C",
    name: "Condition Subsequent Clause",
    definition: "Post-closing obligations",
    scenario: "After acquiring a software company, the buyer's final $10M payment depends on key employees remaining for 12 months and successful customer contract renewals."
  },
  {
    id: 49,
    category: "C",
    name: "Confidentiality Clause",
    definition: "Information protection",
    scenario: "During merger negotiations, both companies share sensitive financial data. This clause prevents either party from using the information competitively if the deal falls through."
  },
  {
    id: 50,
    category: "C",
    name: "Confidentiality Clauses",
    definition: "Non-disclosure obligations",
    scenario: "A consulting firm working with multiple clients in the same industry must keep each client's strategies, financial data, and trade secrets strictly segregated and confidential."
  },
  {
    id: 51,
    category: "C",
    name: "Confidentiality Provisions",
    definition: "Trade secret protection",
    scenario: "An employee leaving a hedge fund cannot share proprietary trading algorithms or investment strategies with their new employer, protecting the fund's competitive advantage."
  },
  {
    id: 52,
    category: "C",
    name: "Conflicts of Interest Clauses",
    definition: "Ethical compliance",
    scenario: "A board member of a public company must disclose and recuse themselves from decisions involving any firm where they hold more than 5% ownership or serve as an officer."
  },
  {
    id: 53,
    category: "C",
    name: "Convertible Note Clause",
    definition: "Debt-to-equity conversion",
    scenario: "An angel investor loans a startup $500K that automatically converts to equity at a 20% discount when the company raises a Series A round of at least $2M."
  },
  {
    id: 54,
    category: "C",
    name: "Copyright Clauses",
    definition: "Intellectual property protection",
    scenario: "A publisher acquiring rights to a novel specifies exclusive worldwide publication rights in all formats while the author retains film and merchandise rights."
  },
  {
    id: 55,
    category: "C",
    name: "Cram-Down Clause",
    definition: "Forced reorganization acceptance",
    scenario: "In a startup's pay-to-play financing round, investors who don't participate have their preferred shares converted to common stock, losing liquidation preferences and other rights."
  },
  {
    id: 56,
    category: "C",
    name: "Credentialing Clause",
    definition: "Professional qualification requirements",
    scenario: "A hospital contracting with physicians requires maintenance of board certifications, state licenses, and malpractice insurance as conditions for practice privileges."
  },
  {
    id: 57,
    category: "C",
    name: "Credit Bid Provision",
    definition: "Secured creditor bidding rights",
    scenario: "When a hotel enters bankruptcy, the mortgage lender can bid the amount of their $50M secured debt rather than cash at the foreclosure auction."
  },
  {
    id: 58,
    category: "C",
    name: "Cross Default Clause",
    definition: "Default triggers across agreements",
    scenario: "A company's default on their equipment lease automatically triggers default on their working capital line of credit, allowing coordinated creditor action."
  },
  {
    id: 59,
    category: "C",
    name: "Currency Exchange Risk Clause",
    definition: "Foreign exchange allocation",
    scenario: "A U.S. importer buying from European suppliers agrees that if the Euro strengthens more than 5% against the dollar, they'll share the increased cost 50/50 with the supplier."
  },
  {
    id: 60,
    category: "D",
    name: "Data Ownership Clause",
    definition: "Information property rights",
    scenario: "A retailer using cloud-based POS software specifies they own all customer transaction data, preventing the software vendor from selling or analyzing their business information."
  },
  {
    id: 61,
    category: "D",
    name: "Data Processing Agreement (DPA)",
    definition: "GDPR compliance framework",
    scenario: "A U.S. marketing firm handling EU customer data for clients signs DPAs outlining exactly how personal data is processed, stored, and protected according to GDPR requirements."
  },
  {
    id: 62,
    category: "D",
    name: "Data Protection and Privacy Clauses",
    definition: "Privacy law compliance",
    scenario: "A health app developer includes provisions for HIPAA compliance, user consent mechanisms, and data breach notifications to meet various regulatory requirements."
  },
  {
    id: 63,
    category: "D",
    name: "Data Retention Clause",
    definition: "Information storage requirements",
    scenario: "A financial services firm must retain customer transaction records for seven years per regulatory requirements but delete them after that period to minimize liability."
  },
  {
    id: 64,
    category: "D",
    name: "Data Transfer Clause",
    definition: "Cross-border data movement",
    scenario: "A multinational corporation specifies how employee data can be transferred between its U.S. headquarters and EU subsidiaries while complying with Schrems II requirements."
  },
  {
    id: 65,
    category: "D",
    name: "Deadlock Clause",
    definition: "Dispute resolution mechanism",
    scenario: "Two equal partners in a joint venture include a provision for binding arbitration when they can't agree on major decisions, preventing operational paralysis."
  },
  {
    id: 66,
    category: "D",
    name: "Deductible Clause",
    definition: "Insurance claim thresholds",
    scenario: "A cyber insurance policy has a $100,000 deductible, meaning the company bears initial breach costs before insurance coverage begins, encouraging strong security practices."
  },
  {
    id: 67,
    category: "D",
    name: "Default Interest Provision",
    definition: "Penalty interest rates",
    scenario: "A commercial loan at 5% interest increases to 10% upon default, incentivizing timely payment while compensating the lender for increased risk and collection costs."
  },
  {
    id: 68,
    category: "D",
    name: "Demurrage Clause",
    definition: "Shipping delay penalties",
    scenario: "An oil tanker charterer must pay $50,000 per day if they exceed the agreed loading time at port, compensating the ship owner for lost revenue opportunities."
  },
  {
    id: 69,
    category: "D",
    name: "Disclaimers",
    definition: "Liability limitations",
    scenario: "Software sold \"as-is\" disclaims warranties of fitness for particular purpose, protecting the vendor from claims if the software doesn't meet unique customer needs."
  },
  {
    id: 70,
    category: "D",
    name: "Disproportionate Impact Language",
    definition: "MAC qualification",
    scenario: "A merger agreement excludes industry-wide downturns from material adverse change unless the target is disproportionately affected compared to peers, allocating systemic risk fairly."
  },
  {
    id: 71,
    category: "D",
    name: "Dispute Resolution Clauses",
    definition: "Conflict resolution procedures",
    scenario: "A construction contract requires mediation before arbitration and arbitration before litigation, encouraging cost-effective resolution at each stage of escalation."
  },
  {
    id: 72,
    category: "D",
    name: "Dissolution Clause",
    definition: "Entity termination procedures",
    scenario: "A joint venture agreement specifies how assets are divided and liabilities settled if partners decide to dissolve after achieving their project goals."
  },
  {
    id: 73,
    category: "D",
    name: "Don't Ask, Don't Waive Standstill",
    definition: "Information request restrictions",
    scenario: "After receiving confidential information, a potential acquirer cannot request a waiver of standstill provisions, preventing them from pressuring the target into hostile negotiations."
  },
  {
    id: 74,
    category: "D",
    name: "Double Collar Provision",
    definition: "Two-tier price adjustment",
    scenario: "An M&A deal includes both a fixed collar (±10% stock price movement) and a floating collar tied to market indices, protecting both parties from various market risks."
  },
  {
    id: 75,
    category: "D",
    name: "Double Dummy Merger Clause",
    definition: "Complex merger structure",
    scenario: "A cross-border acquisition uses two newly formed subsidiaries to facilitate the merger while achieving tax efficiency and regulatory compliance in multiple jurisdictions."
  },
  {
    id: 76,
    category: "D",
    name: "Drag-Along Provision",
    definition: "Forced sale participation",
    scenario: "When majority shareholders sell to a strategic buyer, minority shareholders must sell on the same terms, preventing holdouts from blocking value-maximizing transactions."
  },
  {
    id: 77,
    category: "D",
    name: "Drag-Along Rights",
    definition: "Majority sale compulsion",
    scenario: "A private equity firm owning 70% of a company can force all other shareholders to participate in a sale, ensuring clean exit to buyers wanting 100% ownership."
  },
  {
    id: 78,
    category: "E",
    name: "Earnout Clause",
    definition: "Performance-based payments",
    scenario: "A tech company acquisition includes $100M upfront plus up to $50M more if the acquired product reaches 1 million users within two years, aligning buyer and seller interests."
  },
  {
    id: 79,
    category: "E",
    name: "Employee Invention Clause",
    definition: "Work product ownership",
    scenario: "An engineer at Apple developing technology even partially related to their work duties must assign all rights to Apple, preventing disputes over valuable innovations."
  },
  {
    id: 80,
    category: "E",
    name: "Entire Agreement Clause",
    definition: "Integration provision",
    scenario: "After months of negotiations with various email promises, the final contract states it supersedes all prior discussions, preventing parties from claiming unwritten commitments."
  },
  {
    id: 81,
    category: "E",
    name: "Environmental Audit Clause",
    definition: "Contamination assessment",
    scenario: "Before purchasing an old manufacturing site, the buyer requires Phase I and II environmental assessments to identify contamination that could cost millions to remediate."
  },
  {
    id: 82,
    category: "E",
    name: "Environmental Indemnity",
    definition: "Pollution liability protection",
    scenario: "A property seller indemnifies the buyer against pre-existing contamination claims, backed by environmental insurance, protecting against unknown cleanup costs."
  },
  {
    id: 83,
    category: "E",
    name: "Escalation Clause",
    definition: "Price adjustment mechanism",
    scenario: "A five-year office lease includes annual rent increases tied to CPI inflation, protecting the landlord's real returns while providing tenant predictability."
  },
  {
    id: 84,
    category: "E",
    name: "Escalation Clauses",
    definition: "Automatic increase provisions",
    scenario: "A long-term supply contract adjusts pricing quarterly based on commodity indices, sharing raw material cost risks between manufacturer and customer."
  },
  {
    id: 85,
    category: "E",
    name: "Escrow Clause",
    definition: "Third-party fund holding",
    scenario: "In a $50M acquisition, $5M is held in escrow for 18 months to cover potential indemnification claims, balancing seller's desire for cash with buyer's need for protection."
  },
  {
    id: 86,
    category: "E",
    name: "Exclusion Clause",
    definition: "Liability limitations",
    scenario: "A ski resort's liability waiver excludes responsibility for injuries from inherent skiing risks while maintaining liability for equipment failures or negligent operations."
  },
  {
    id: 87,
    category: "E",
    name: "Exclusion Clauses",
    definition: "Coverage exceptions",
    scenario: "Business interruption insurance excludes pandemics, leaving many restaurants without coverage during COVID-19, highlighting the importance of understanding policy limitations."
  },
  {
    id: 88,
    category: "E",
    name: "Exclusivity Agreement",
    definition: "Sole dealing arrangement",
    scenario: "Starbucks signs exclusive agreements with certain suppliers, guaranteeing volume in exchange for being the only coffee chain they supply with specific products."
  },
  {
    id: 89,
    category: "E",
    name: "Exculpatory Charter Provision",
    definition: "Director liability protection",
    scenario: "Delaware corporation charter provisions protect directors from personal liability for breaching duty of care (but not loyalty), encouraging qualified individuals to serve on boards."
  },
  {
    id: 90,
    category: "E",
    name: "Exculpatory Clause",
    definition: "Liability release",
    scenario: "A bungee jumping company requires participants to sign releases acknowledging inherent dangers and waiving claims for injuries resulting from proper equipment operation."
  },
  {
    id: 91,
    category: "E",
    name: "Exculpatory Clauses",
    definition: "Fault exemptions",
    scenario: "A parking garage disclaims liability for vehicle theft or damage, requiring customers to assume these risks in exchange for lower parking rates."
  },
  {
    id: 92,
    category: "E",
    name: "Exemption Clause",
    definition: "Obligation exceptions",
    scenario: "A software license exempts the vendor from liability if government regulations prevent certain features from functioning, recognizing regulatory risks beyond their control."
  },
  {
    id: 93,
    category: "E",
    name: "Export Control Compliance",
    definition: "Trade regulation adherence",
    scenario: "A semiconductor manufacturer selling globally includes provisions ensuring customers won't re-export products to sanctioned countries, avoiding violations of U.S. export controls."
  },
  {
    id: 94,
    category: "F",
    name: "Farmout Agreement Clause",
    definition: "Oil/gas interest transfer",
    scenario: "An oil company with drilling rights but limited capital transfers partial interest to another operator who funds exploration in exchange for production sharing."
  },
  {
    id: 95,
    category: "F",
    name: "Financial Covenants",
    definition: "Financial metric maintenance",
    scenario: "A leveraged buyout requires the portfolio company to maintain debt-to-EBITDA below 4.0x and interest coverage above 3.0x, tested quarterly with default consequences."
  },
  {
    id: 96,
    category: "F",
    name: "Force Adjustment Clauses",
    definition: "Market condition modifications",
    scenario: "A long-term energy supply contract adjusts pricing when regulatory changes significantly alter market dynamics, preventing windfall gains or losses from policy shifts."
  },
  {
    id: 97,
    category: "F",
    name: "Force Majeure",
    definition: "Unforeseeable event protection",
    scenario: "When a tsunami disrupts Japanese semiconductor production, manufacturers invoke force majeure to excuse delivery delays to electronics assemblers without penalty."
  },
  {
    id: 98,
    category: "F",
    name: "Force Majeure Clause",
    definition: "Act of God provisions",
    scenario: "During COVID-19, event venues invoke this clause to cancel conferences without penalty, as government lockdowns made performance illegal or impossible."
  },
  {
    id: 99,
    category: "F",
    name: "Force Pooling Clause",
    definition: "Mandatory unitization",
    scenario: "When one oil company discovers reserves extending under neighboring properties, state law may force all owners to pool interests for efficient extraction and fair revenue sharing."
  },
  {
    id: 100,
    category: "F",
    name: "Franchise Renewal Clause",
    definition: "Extension rights",
    scenario: "A successful Subway franchisee has the right to renew for additional 10-year terms if they maintain brand standards and aren't in default, protecting their business investment."
  },
  {
    id: 101,
    category: "G",
    name: "Garden Leave Clause",
    definition: "Paid notice period",
    scenario: "An investment banker resigning for a competitor must stay home on full pay for 90 days, preventing immediate knowledge transfer while honoring employment obligations."
  },
  {
    id: 102,
    category: "G",
    name: "General Average Clause",
    definition: "Maritime loss sharing",
    scenario: "When a cargo ship jettisons containers to avoid sinking in a storm, all cargo owners share the loss proportionally, spreading extraordinary sacrifice costs fairly."
  },
  {
    id: 103,
    category: "G",
    name: "Gross-Up Clause",
    definition: "Tax payment adjustment",
    scenario: "A U.S. company paying a UK consultant agrees to gross up payments so the consultant receives the full fee after UK withholding taxes are deducted."
  },
  {
    id: 104,
    category: "H",
    name: "Hazardous Material Notification",
    definition: "Environmental disclosure",
    scenario: "A warehouse tenant storing chemicals must notify the landlord and maintain proper permits, protecting the property owner from environmental liability."
  },
  {
    id: 105,
    category: "H",
    name: "Himalaya Clause",
    definition: "Third-party protection extension",
    scenario: "A shipping contract's liability limits extend to protect the carrier's subcontractors and port operators, preventing circumvention through suits against service providers."
  },
  {
    id: 106,
    category: "H",
    name: "Holdover Clause",
    definition: "Post-term occupancy",
    scenario: "A retail tenant staying past lease expiration pays 150% of rent during holdover, incentivizing timely departure while compensating landlords for lost opportunities."
  },
  {
    id: 107,
    category: "I",
    name: "IP Ownership Clause",
    definition: "Intellectual property rights",
    scenario: "A company hiring freelance developers specifies all code created becomes company property, avoiding disputes when the software becomes valuable."
  },
  {
    id: 108,
    category: "I",
    name: "Improvement Allowance Clause",
    definition: "Tenant improvement funding",
    scenario: "An office landlord provides $50 per square foot for buildout, allowing tenants to customize space while ensuring improvements that increase property value."
  },
  {
    id: 109,
    category: "I",
    name: "Incoterms Clause",
    definition: "International trade terms",
    scenario: "A purchase order specifying \"FOB Shanghai\" clarifies that the seller bears costs and risks until goods are loaded on the ship, when responsibility transfers to buyer."
  },
  {
    id: 110,
    category: "I",
    name: "Indemnification Clause",
    definition: "Loss protection provision",
    scenario: "A software vendor indemnifies customers against patent infringement claims, taking responsibility for legal defense if their code violates third-party patents."
  },
  {
    id: 111,
    category: "I",
    name: "Indemnity Clause",
    definition: "Damage compensation",
    scenario: "A general contractor indemnifies the property owner against subcontractor injuries, centralizing liability management with the party controlling the worksite."
  },
  {
    id: 112,
    category: "I",
    name: "Independent Contractor Clause",
    definition: "Employment status clarification",
    scenario: "A company hiring consultants specifies they're independent contractors not employees, affecting tax withholding, benefits eligibility, and legal responsibilities."
  },
  {
    id: 113,
    category: "L",
    name: "Laytime Clause",
    definition: "Cargo loading time",
    scenario: "A grain shipment allows 72 hours for loading at port. Exceeding this time triggers demurrage charges, incentivizing efficient port operations."
  },
  {
    id: 114,
    category: "L",
    name: "License Grant",
    definition: "Permission scope definition",
    scenario: "Microsoft grants users a non-exclusive, non-transferable license to use Office 365 on up to 5 devices, defining precise usage rights while retaining ownership."
  },
  {
    id: 115,
    category: "L",
    name: "Limitations Period Clause",
    definition: "Claim filing deadlines",
    scenario: "A construction contract requires defect claims within one year of discovery but no more than five years after completion, balancing contractor certainty with owner protection."
  },
  {
    id: 116,
    category: "L",
    name: "Liquidated Damages Clause",
    definition: "Pre-agreed breach compensation",
    scenario: "A wedding venue charges couples the full rental fee for cancellations within 60 days, reflecting lost booking opportunities and preparation costs."
  },
  {
    id: 117,
    category: "L",
    name: "Liquidated Damages Clause (Construction)",
    definition: "Delay penalties",
    scenario: "A hospital construction project includes $10,000 per day penalties for late completion, reflecting revenue losses from delayed opening and encouraging timely performance."
  },
  {
    id: 118,
    category: "L",
    name: "Lock-Up Agreement",
    definition: "Sale restriction period",
    scenario: "Company insiders agree not to sell shares for 180 days after IPO, preventing market flooding and demonstrating management confidence to public investors."
  },
  {
    id: 119,
    category: "M",
    name: "Market Flex Clause",
    definition: "Loan term modification rights",
    scenario: "Investment banks underwriting a leveraged buyout can adjust interest rates or structure based on market reception, ensuring successful syndication."
  },
  {
    id: 120,
    category: "M",
    name: "Material Adverse Change (MAC)",
    definition: "Significant negative events",
    scenario: "A lender can accelerate a loan if the borrower's financial condition deteriorates significantly, protecting against lending to a failing business."
  },
  {
    id: 121,
    category: "M",
    name: "Material Adverse Effect (MAE)",
    definition: "Deal termination trigger",
    scenario: "When a target company loses its largest customer between signing and closing, the buyer invokes MAE to terminate the acquisition without penalty."
  },
  {
    id: 122,
    category: "M",
    name: "Mediation Clause",
    definition: "Alternative dispute resolution",
    scenario: "Business partners agree to mediate disputes before litigation, using a neutral mediator to find mutually acceptable solutions while preserving relationships."
  },
  {
    id: 123,
    category: "M",
    name: "Medical Necessity Clause",
    definition: "Healthcare coverage criteria",
    scenario: "Insurance covers procedures only when medically necessary per physician determination, preventing coverage of cosmetic procedures while ensuring essential care."
  },
  {
    id: 124,
    category: "M",
    name: "Modification Clause",
    definition: "Amendment procedures",
    scenario: "A supply agreement requires written consent from both parties for any changes, preventing informal modifications that could create disputes later."
  },
  {
    id: 125,
    category: "M",
    name: "Moral Rights Waiver",
    definition: "Artist rights relinquishment",
    scenario: "A graphic designer creating a corporate logo waives moral rights, allowing the company to modify the design without consultation or attribution."
  },
  {
    id: 126,
    category: "M",
    name: "Most Favored Nation (MFN)",
    definition: "Best terms guarantee",
    scenario: "Amazon's contracts with suppliers may include MFN clauses ensuring they receive the lowest prices offered to any retailer, leveraging their volume for competitive advantage."
  },
  {
    id: 127,
    category: "N",
    name: "Negative Covenant",
    definition: "Prohibited actions",
    scenario: "A borrower cannot pay dividends, acquire companies, or take additional debt without lender consent, preserving assets for loan repayment."
  },
  {
    id: 128,
    category: "N",
    name: "Negative Pledge Clause",
    definition: "Asset encumbrance restriction",
    scenario: "A bond issuer cannot grant security interests in assets to other creditors, ensuring bondholders aren't subordinated to new secured debt."
  },
  {
    id: 129,
    category: "N",
    name: "Non-Compete Clause",
    definition: "Competition prohibition",
    scenario: "A salon owner selling their business cannot open another salon within 5 miles for 3 years, protecting the buyer's purchased goodwill and customer base."
  },
  {
    id: 130,
    category: "N",
    name: "Non-Competition",
    definition: "Business competition restriction",
    scenario: "A software company's VP of Sales cannot join direct competitors for 12 months after leaving, protecting customer relationships and strategic information."
  },
  {
    id: 131,
    category: "N",
    name: "Non-Disclosure Agreement (NDA)",
    definition: "Confidentiality contract",
    scenario: "Before acquisition discussions, potential buyers sign NDAs preventing them from using target company information for competitive advantage if talks fail."
  },
  {
    id: 132,
    category: "N",
    name: "Non-Disparagement Clause",
    definition: "Negative statement prohibition",
    scenario: "Departing executives agree not to make negative public statements about their former employer, protecting corporate reputation in exchange for severance benefits."
  },
  {
    id: 133,
    category: "N",
    name: "Non-Interference Clause",
    definition: "Business relationship protection",
    scenario: "A company selling a division agrees not to interfere with customer or supplier relationships, ensuring smooth transition and maintaining asset value for buyer."
  },
  {
    id: 134,
    category: "N",
    name: "Non-Solicitation Clause",
    definition: "Employee/customer poaching ban",
    scenario: "A consultant working with a client cannot recruit the client's employees or customers for two years, protecting the client's business relationships."
  },
  {
    id: 135,
    category: "N",
    name: "Notice of Claim",
    definition: "Claim notification requirements",
    scenario: "Insurance policies require notification within 30 days of potential claims, allowing insurers to investigate promptly and control defense strategies."
  },
  {
    id: 136,
    category: "O",
    name: "Open Source Compliance Clause",
    definition: "Software license adherence",
    scenario: "A company using open source components must comply with various licenses (GPL, MIT, Apache), including attribution and source code disclosure requirements."
  },
  {
    id: 137,
    category: "O",
    name: "Overtime Eligibility Clause",
    definition: "Additional pay qualification",
    scenario: "An employment contract clarifies that managers earning over $107,432 annually are exempt from overtime, complying with federal labor law classifications."
  },
  {
    id: 138,
    category: "P",
    name: "Partner Authority Clause",
    definition: "Partnership binding powers",
    scenario: "In a law firm partnership, only the managing partner can bind the firm to contracts over $100,000, preventing unauthorized major commitments."
  },
  {
    id: 139,
    category: "P",
    name: "Patent Infringement Indemnification",
    definition: "IP violation protection",
    scenario: "A technology vendor protects customers against patent trolls by agreeing to defend and pay damages for any infringement claims related to their software."
  },
  {
    id: 140,
    category: "P",
    name: "Patient Confidentiality Clause",
    definition: "HIPAA compliance",
    scenario: "Healthcare IT vendors accessing patient data must maintain HIPAA-compliant security measures and report any breaches within 24 hours."
  },
  {
    id: 141,
    category: "P",
    name: "Penalty Clause",
    definition: "Breach punishment",
    scenario: "A non-compete violation triggers repayment of all severance benefits plus attorney fees, creating strong financial incentive for compliance."
  },
  {
    id: 142,
    category: "P",
    name: "Penalty Clauses",
    definition: "Violation consequences",
    scenario: "Late delivery penalties in a just-in-time manufacturing contract reflect actual production line disruption costs, encouraging reliable performance."
  },
  {
    id: 143,
    category: "P",
    name: "Percentage Rent Clause",
    definition: "Revenue-based rent",
    scenario: "A restaurant pays base rent of $10,000 monthly plus 6% of gross sales over $200,000, allowing landlords to share in tenant success."
  },
  {
    id: 144,
    category: "P",
    name: "Physician Incentive Clause",
    definition: "Performance-based compensation",
    scenario: "Hospital-employed doctors receive base salary plus bonuses for patient satisfaction scores and quality metrics, aligning compensation with care goals."
  },
  {
    id: 145,
    category: "P",
    name: "Prepayment Penalty",
    definition: "Early payment fee",
    scenario: "A commercial mortgage charges 3% penalty for early payoff, compensating the lender for lost interest income and reinvestment challenges."
  },
  {
    id: 146,
    category: "P",
    name: "Profit and Loss Allocation Clause",
    definition: "Partnership distributions",
    scenario: "A real estate partnership allocates tax losses to high-income investors needing deductions while cash distributions follow different percentages."
  },
  {
    id: 147,
    category: "P",
    name: "Put Option Clause",
    definition: "Forced purchase right",
    scenario: "Minority investors in a private company can force the majority to buy their shares at formula price after 5 years, providing liquidity in illiquid investment."
  },
  {
    id: 148,
    category: "R",
    name: "Redemption Rights Clause",
    definition: "Share repurchase option",
    scenario: "Preferred stockholders can force the company to repurchase their shares after 7 years if no exit event occurs, protecting against indefinite illiquidity."
  },
  {
    id: 149,
    category: "R",
    name: "Registration Rights",
    definition: "Public offering participation",
    scenario: "Venture investors can require the company to register their shares for public sale after IPO lock-up expires, enabling orderly exit from investment."
  },
  {
    id: 150,
    category: "R",
    name: "Renewal Option Clause",
    definition: "Extension rights",
    scenario: "A successful retail tenant has three 5-year renewal options at market rent, protecting their location investment while allowing periodic rent adjustment."
  },
  {
    id: 151,
    category: "R",
    name: "Retention Clause",
    definition: "Holdback provision",
    scenario: "Construction contracts retain 10% of each progress payment until project completion, ensuring contractor performance and punch list completion."
  },
  {
    id: 152,
    category: "R",
    name: "Right of Entry",
    definition: "Property access permission",
    scenario: "Utility companies maintain easements allowing entry to private property for power line maintenance, balancing property rights with infrastructure needs."
  },
  {
    id: 153,
    category: "R",
    name: "Right of First Refusal",
    definition: "Priority purchase right",
    scenario: "Current tenants can match any third-party offer to purchase their building, protecting against displacement while preserving owner's sale rights."
  },
  {
    id: 154,
    category: "R",
    name: "Royalty Payment Clause",
    definition: "Usage-based compensation",
    scenario: "A book author receives 15% of hardcover and 10% of paperback sales, aligning their compensation with publisher's revenue from their work."
  },
  {
    id: 155,
    category: "R",
    name: "Royalty Payment Clause (Energy)",
    definition: "Resource extraction payments",
    scenario: "Landowners receive 12.5% of oil revenue from wells on their property, providing ongoing compensation for resource extraction rights."
  },
  {
    id: 156,
    category: "S",
    name: "Service Level Agreement (SLA)",
    definition: "Performance standards",
    scenario: "Cloud providers guarantee 99.99% uptime with service credits for downtime, quantifying reliability expectations and remedies for failures."
  },
  {
    id: 157,
    category: "S",
    name: "Severability Clause",
    definition: "Partial invalidity protection",
    scenario: "If a court invalidates the non-compete portion of an employment agreement, other provisions like confidentiality remain enforceable, preserving contract value."
  },
  {
    id: 158,
    category: "S",
    name: "Software Maintenance Clause",
    definition: "Support obligations",
    scenario: "Enterprise software includes bug fixes and security patches for 3 years with optional paid extensions, balancing vendor obligations with revenue opportunities."
  },
  {
    id: 159,
    category: "S",
    name: "Source Code Escrow Clause",
    definition: "Software protection",
    scenario: "Mission-critical software source code is deposited with neutral escrow agent, releasing to customer if vendor goes bankrupt or stops support."
  },
  {
    id: 160,
    category: "S",
    name: "Standstill Agreement",
    definition: "Action restriction period",
    scenario: "An activist investor agrees not to buy additional shares or launch proxy fights for 2 years in exchange for board representation."
  },
  {
    id: 161,
    category: "S",
    name: "Standstill Provision",
    definition: "Hostile takeover prevention",
    scenario: "After receiving confidential information, potential acquirers cannot buy shares or launch hostile bids for 12 months, protecting against information misuse."
  },
  {
    id: 162,
    category: "S",
    name: "Statute of Limitations Clauses",
    definition: "Legal deadline provisions",
    scenario: "Construction defect claims must be filed within 2 years of discovery but no more than 10 years after completion, balancing competing interests."
  },
  {
    id: 163,
    category: "S",
    name: "Subcontracting Clauses",
    definition: "Third-party delegation",
    scenario: "Government contractors must obtain approval before subcontracting to ensure security clearances and compliance with federal contracting rules."
  },
  {
    id: 164,
    category: "S",
    name: "Subordination Clause",
    definition: "Payment priority",
    scenario: "Mezzanine debt is subordinated to senior bank loans, meaning banks get paid first in bankruptcy, reflecting different risk levels and returns."
  },
  {
    id: 165,
    category: "S",
    name: "Subrogation Clause",
    definition: "Insurance claim rights",
    scenario: "After paying a claim, the insurance company can sue responsible third parties to recover payments, preventing double recovery by insured."
  },
  {
    id: 166,
    category: "S",
    name: "Sunset Clause",
    definition: "Provision expiration",
    scenario: "Emergency pandemic regulations automatically expire after 2 years unless renewed, ensuring temporary measures don't become permanent without review."
  },
  {
    id: 167,
    category: "S",
    name: "Sunset Clauses",
    definition: "Automatic termination",
    scenario: "A real estate developer's architectural controls over a subdivision expire after 30 years, balancing initial vision with future flexibility."
  },
  {
    id: 168,
    category: "S",
    name: "Supply Chain Clause",
    definition: "Vendor management",
    scenario: "Manufacturers require suppliers to maintain business continuity plans and disclose their own critical suppliers, managing supply chain risks."
  },
  {
    id: 169,
    category: "S",
    name: "Surface Use Clause",
    definition: "Land access rights",
    scenario: "Mineral rights owners can use surface land for drilling operations but must compensate for damage and restore land after extraction."
  },
  {
    id: 170,
    category: "T",
    name: "Tag-Along Provision",
    definition: "Co-sale rights",
    scenario: "When founders sell shares to strategic buyers, employees with vested options can sell proportionate amounts at the same price and terms."
  },
  {
    id: 171,
    category: "T",
    name: "Tag-Along Rights",
    definition: "Minority sale participation",
    scenario: "If a majority shareholder sells to private equity, minority investors can include their shares in the transaction, ensuring equal treatment."
  },
  {
    id: 172,
    category: "T",
    name: "Take-or-Pay Clause",
    definition: "Minimum purchase obligation",
    scenario: "A natural gas buyer must pay for minimum volumes whether used or not, providing suppliers revenue certainty for infrastructure investments."
  },
  {
    id: 173,
    category: "T",
    name: "Tax Allocation Clause",
    definition: "Tax burden distribution",
    scenario: "In a partnership, tax credits flow to investors who can use them while foreign partners receive equivalent cash distributions."
  },
  {
    id: 174,
    category: "T",
    name: "Tax Indemnity Clause",
    definition: "Tax liability protection",
    scenario: "Sellers indemnify buyers for pre-closing tax liabilities discovered after acquisition, protecting against hidden tax exposures."
  },
  {
    id: 175,
    category: "T",
    name: "Termination for Cause",
    definition: "Breach-based ending",
    scenario: "An employer can immediately terminate employees for theft, violence, or harassment without severance, protecting workplace safety and assets."
  },
  {
    id: 176,
    category: "T",
    name: "Termination for Convenience",
    definition: "No-fault termination",
    scenario: "Government contracts allow agencies to cancel for any reason with payment for work completed plus reasonable termination costs."
  },
  {
    id: 177,
    category: "T",
    name: "Termination for Convenience Clauses",
    definition: "Discretionary exit",
    scenario: "A company can exit a multi-year service contract with 90 days notice, providing flexibility as business needs change."
  },
  {
    id: 178,
    category: "T",
    name: "Territorial Exclusivity Clause",
    definition: "Geographic rights",
    scenario: "A franchisee receives exclusive rights to operate within defined zip codes, protecting their investment from same-brand competition."
  },
  {
    id: 179,
    category: "T",
    name: "Third Party Rights Provision",
    definition: "Non-party benefits",
    scenario: "A construction contract allows the building owner (not party to subcontracts) to enforce warranties directly against subcontractors."
  },
  {
    id: 180,
    category: "T",
    name: "Third-Party Beneficiary Clause",
    definition: "External party rights",
    scenario: "Life insurance beneficiaries can enforce policies they didn't sign, ensuring intended recipients receive death benefits."
  },
  {
    id: 181,
    category: "T",
    name: "Trade Secret Protection Clause",
    definition: "Proprietary information security",
    scenario: "Employees with access to Coca-Cola's formula must maintain secrecy indefinitely, protecting invaluable competitive advantages."
  },
  {
    id: 182,
    category: "T",
    name: "Trademark License Clause",
    definition: "Brand usage rights",
    scenario: "Sports teams license logos to merchandise manufacturers with strict quality controls and royalty payments, monetizing brand value."
  },
  {
    id: 183,
    category: "T",
    name: "Transfer Pricing Clause",
    definition: "Inter-company pricing",
    scenario: "Multinational corporations price internal transfers at arm's length to comply with tax regulations and prevent profit shifting."
  },
  {
    id: 184,
    category: "T",
    name: "Triple Net Lease Clause",
    definition: "Tenant expense responsibility",
    scenario: "Commercial tenants pay base rent plus property taxes, insurance, and maintenance, giving landlords predictable net income."
  },
  {
    id: 185,
    category: "U",
    name: "Use Clause",
    definition: "Property usage restrictions",
    scenario: "Shopping center leases restrict uses to prevent competition (no two coffee shops) while ensuring complementary tenant mix."
  },
  {
    id: 186,
    category: "U",
    name: "Use Restrictions",
    definition: "Limitation provisions",
    scenario: "Residential developments prohibit commercial activities, short-term rentals, and certain pet breeds to maintain neighborhood character."
  },
  {
    id: 187,
    category: "U",
    name: "Voting Agreement",
    definition: "Shareholder voting obligations",
    scenario: "Investors agree to vote together for board nominees, concentrating influence and ensuring representation despite individual small holdings."
  },
  {
    id: 188,
    category: "U",
    name: "Waiver Clause",
    definition: "Rights relinquishment procedures",
    scenario: "Contract specifies waivers must be written and signed, preventing claims that informal behavior modified agreement terms."
  },
  {
    id: 189,
    category: "U",
    name: "Walkaway Rights",
    definition: "Deal termination options",
    scenario: "Buyers can terminate if due diligence reveals undisclosed liabilities exceeding $1M, protecting against hidden problems."
  },
  {
    id: 190,
    category: "U",
    name: "Warrant Clause",
    definition: "Option security provisions",
    scenario: "Lenders receive warrants to purchase equity at fixed price, providing upside potential beyond interest income in venture debt deals."
  },
  {
    id: 191,
    category: "U",
    name: "Warranty Clause",
    definition: "Quality guarantees",
    scenario: "Electronics manufacturers warrant products free from defects for one year, building consumer confidence while limiting long-term liability."
  },
  {
    id: 192,
    category: "U",
    name: "Warranty Clauses",
    definition: "Performance assurances",
    scenario: "Software vendors warrant their products will perform substantially as documented, with remedies limited to fixes or refunds."
  }
];

export const clauseStats = {
  totalClauses: 192,
  categories: 18,
  precedentDocs: "500,000+",
  accuracyRate: "99.8%"
};
