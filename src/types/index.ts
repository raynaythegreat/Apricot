// Transaction Types
export type TransactionStatus = 'pending' | 'approved' | 'denied';
export type TransactionSource = 'ocr' | 'manual';

export interface Transaction {
  id: string;
  date: Date;
  description: string;
  deposit: number | null;
  withdrawal: number | null;
  category: TransactionCategory;
  status: TransactionStatus;
  source: TransactionSource;
  documentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Category Types
export type TransactionCategory = 
  | 'revenue'
  | 'cogs'
  | 'operating_expense'
  | 'payroll'
  | 'marketing'
  | 'utilities'
  | 'rent'
  | 'insurance'
  | 'professional_services'
  | 'equipment'
  | 'travel'
  | 'office_supplies'
  | 'taxes'
  | 'loan_payment'
  | 'asset_purchase'
  | 'equity'
  | 'other_income'
  | 'other_expense'
  | 'uncategorized';

export interface CategoryInfo {
  id: TransactionCategory;
  name: string;
  type: 'income' | 'expense' | 'asset' | 'liability' | 'equity';
  color: string;
  statementSection: 'pl' | 'cashflow' | 'balancesheet';
}

// Document Types
export type DocumentStatus = 'pending' | 'processing' | 'completed' | 'error';

export interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  status: DocumentStatus;
  file?: File;
  preview?: string;
  extractedText?: string;
  transactionCount: number;
  createdAt: Date;
}

// Statement Types
export interface StatementPeriod {
  startDate: Date;
  endDate: Date;
  label: string;
}

export interface ProfitLossStatement {
  period: StatementPeriod;
  revenue: {
    total: number;
    items: StatementLineItem[];
  };
  cogs: {
    total: number;
    items: StatementLineItem[];
  };
  grossProfit: number;
  operatingExpenses: {
    total: number;
    categories: StatementCategory[];
  };
  netOperatingIncome: number;
  otherIncome: {
    total: number;
    items: StatementLineItem[];
  };
  otherExpenses: {
    total: number;
    items: StatementLineItem[];
  };
  netIncome: number;
}

export interface CashFlowStatement {
  period: StatementPeriod;
  operatingActivities: {
    total: number;
    items: StatementLineItem[];
  };
  investingActivities: {
    total: number;
    items: StatementLineItem[];
  };
  financingActivities: {
    total: number;
    items: StatementLineItem[];
  };
  netCashChange: number;
  beginningCash: number;
  endingCash: number;
}

export interface BalanceSheetStatement {
  asOfDate: Date;
  assets: {
    current: StatementCategory[];
    fixed: StatementCategory[];
    total: number;
  };
  liabilities: {
    current: StatementCategory[];
    longTerm: StatementCategory[];
    total: number;
  };
  equity: {
    total: number;
    items: StatementLineItem[];
  };
  totalLiabilitiesAndEquity: number;
}

export interface StatementLineItem {
  id: string;
  description: string;
  amount: number;
  category?: TransactionCategory;
}

export interface StatementCategory {
  name: string;
  total: number;
  items: StatementLineItem[];
}

// App State
export interface AppState {
  transactions: Transaction[];
  documents: Document[];
  isLoading: boolean;
  currentView: 'dashboard' | 'upload' | 'transactions' | 'statements' | 'export';
}

// Export Types
export type ExportFormat = 'pdf' | 'excel' | 'csv';
export type StatementType = 'profit-loss' | 'cash-flow' | 'balance-sheet';

export interface ExportOptions {
  format: ExportFormat;
  statementType: StatementType | 'all';
  period: StatementPeriod;
  includePending: boolean;
}