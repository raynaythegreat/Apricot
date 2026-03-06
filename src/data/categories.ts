import { CategoryInfo, TransactionCategory } from '@/types';

export const categories: CategoryInfo[] = [
  // Income Categories
  {
    id: 'revenue',
    name: 'Revenue',
    type: 'income',
    color: '#22c55e',
    statementSection: 'pl',
  },
  {
    id: 'other_income',
    name: 'Other Income',
    type: 'income',
    color: '#10b981',
    statementSection: 'pl',
  },
  
  // Expense Categories
  {
    id: 'cogs',
    name: 'Cost of Goods Sold',
    type: 'expense',
    color: '#ef4444',
    statementSection: 'pl',
  },
  {
    id: 'operating_expense',
    name: 'Operating Expenses',
    type: 'expense',
    color: '#f97316',
    statementSection: 'pl',
  },
  {
    id: 'payroll',
    name: 'Payroll & Wages',
    type: 'expense',
    color: '#8b5cf6',
    statementSection: 'pl',
  },
  {
    id: 'marketing',
    name: 'Marketing & Advertising',
    type: 'expense',
    color: '#ec4899',
    statementSection: 'pl',
  },
  {
    id: 'utilities',
    name: 'Utilities',
    type: 'expense',
    color: '#06b6d4',
    statementSection: 'pl',
  },
  {
    id: 'rent',
    name: 'Rent & Lease',
    type: 'expense',
    color: '#f59e0b',
    statementSection: 'pl',
  },
  {
    id: 'insurance',
    name: 'Insurance',
    type: 'expense',
    color: '#6366f1',
    statementSection: 'pl',
  },
  {
    id: 'professional_services',
    name: 'Professional Services',
    type: 'expense',
    color: '#14b8a6',
    statementSection: 'pl',
  },
  {
    id: 'equipment',
    name: 'Equipment',
    type: 'expense',
    color: '#a855f7',
    statementSection: 'pl',
  },
  {
    id: 'travel',
    name: 'Travel & Entertainment',
    type: 'expense',
    color: '#f43f5e',
    statementSection: 'pl',
  },
  {
    id: 'office_supplies',
    name: 'Office Supplies',
    type: 'expense',
    color: '#84cc16',
    statementSection: 'pl',
  },
  {
    id: 'taxes',
    name: 'Taxes',
    type: 'expense',
    color: '#dc2626',
    statementSection: 'pl',
  },
  {
    id: 'other_expense',
    name: 'Other Expenses',
    type: 'expense',
    color: '#78716c',
    statementSection: 'pl',
  },
  
  // Asset Categories
  {
    id: 'asset_purchase',
    name: 'Asset Purchase',
    type: 'asset',
    color: '#0ea5e9',
    statementSection: 'balancesheet',
  },
  
  // Liability Categories
  {
    id: 'loan_payment',
    name: 'Loan Payment',
    type: 'liability',
    color: '#eab308',
    statementSection: 'balancesheet',
  },
  
  // Equity Categories
  {
    id: 'equity',
    name: 'Equity',
    type: 'equity',
    color: '#22d3ee',
    statementSection: 'balancesheet',
  },
  
  // Uncategorized
  {
    id: 'uncategorized',
    name: 'Uncategorized',
    type: 'expense',
    color: '#64748b',
    statementSection: 'pl',
  },
];

export const getCategoryById = (id: TransactionCategory): CategoryInfo | undefined => {
  return categories.find(cat => cat.id === id);
};

export const getCategoriesByType = (type: CategoryInfo['type']): CategoryInfo[] => {
  return categories.filter(cat => cat.type === type);
};

export const getCategoriesBySection = (section: CategoryInfo['statementSection']): CategoryInfo[] => {
  return categories.filter(cat => cat.statementSection === section);
};