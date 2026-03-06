import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { v4 as uuidv4 } from 'uuid'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateId(): string {
  return uuidv4()
}

export function formatCurrency(amount: number | null | undefined): string {
  if (amount === null || amount === undefined) return '-'
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  }).format(d)
}

export function formatShortDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(d)
}

export function parseDate(dateString: string): Date {
  // Try various date formats
  const formats = [
    /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/, // MM/DD/YYYY
    /^(\d{1,2})\/(\d{1,2})\/(\d{2})$/, // MM/DD/YY
    /^(\d{4})-(\d{1,2})-(\d{1,2})$/, // YYYY-MM-DD
    /^(\d{1,2})-(\d{1,2})-(\d{4})$/, // MM-DD-YYYY
  ]

  for (const format of formats) {
    const match = dateString.match(format)
    if (match) {
      let month: number, day: number, year: number
      
      if (format === formats[2]) {
        year = parseInt(match[1])
        month = parseInt(match[2]) - 1
        day = parseInt(match[3])
      } else {
        month = parseInt(match[1]) - 1
        day = parseInt(match[2])
        year = parseInt(match[3])
        if (year < 100) year += 2000
      }
      
      return new Date(year, month, day)
    }
  }

  // Fallback to native parsing
  return new Date(dateString)
}

export function parseCurrency(value: string): number | null {
  if (!value) return null
  
  // Remove currency symbols, commas, and spaces
  const cleaned = value.replace(/[$,\s]/g, '')
  
  // Handle parentheses as negative
  const isNegative = cleaned.startsWith('(') && cleaned.endsWith(')')
  const numberString = isNegative ? cleaned.slice(1, -1) : cleaned
  
  const parsed = parseFloat(numberString)
  
  if (isNaN(parsed)) return null
  
  return isNegative ? -parsed : parsed
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function getQuarter(date: Date): number {
  return Math.floor(date.getMonth() / 3) + 1
}

export function getFiscalYear(date: Date, startMonth: number = 0): number {
  return date.getMonth() >= startMonth ? date.getFullYear() : date.getFullYear() - 1
}