export const RequiredExpense = [
  {
    id: 1,
    name: "Food & Beverage",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 2,
    name: "Transportation",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 3,
    name: "Rentals",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 4,
    name: "Water Bill",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 5,
    name: "Phone Bill",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 6,
    name: "Electricity Bill",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 7,
    name: "Gas Bill",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 8,
    name: "Internet Bill",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 9,
    name: "Television Bill",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 10,
    name: "Other utility Bills",
    type: "Expense",
    subType: "Expense"
  },
];

export const UpAndCorners = [
  {
    id: 1,
    name: "Home Maintenance",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 2,
    name: "Vechicle Maintenance",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 3,
    name: "Medical Check Up",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 4,
    name: "Insurances",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 5,
    name: "Houseware",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 6,
    name: "Education",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 7,
    name: "Personal Items",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 8,
    name: "Pets",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 9,
    name: "Home Services",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 10,
    name: "Other Expenses",
    type: "Expense",
    subType: "Expense"
  },
];

export const InvestingAndDebtPayments = [
  {
    id: 1,
    name: "Investment",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 2,
    name: "Debt Collection",
    type: "Income",
    subType: "Debt/Loan"
  },
  {
    id: 3,
    name: "Debt",
    type: "Income",
    subType: "Debt/Loan"
  },
  {
    id: 4,
    name: "Loan",
    type: "Expense",
    subType: "Debt/Loan"
  },
  {
    id: 5,
    name: "Repayment",
    type: "Expense",
    subType: "Debt/Loan"
  },
  {
    id: 6,
    name: "Pay Interest",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 7,
    name: "Collect Interest",
    type: "Income",
    subType: "Income"
  },
];

export const FunAndRelax = [
  {
    id: 1,
    name: "Fitness",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 2,
    name: "Makeup",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 3,
    name: "Gifts & Donations",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 4,
    name: "Streaming Services",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 5,
    name: "Fun money",
    type: "Expense",
    subType: "Expense"
  },
];

export const Income = [
  {
    id: 1,
    name: "Salary",
    type: "Income",
    subType: "Income"
  },
  {
    id: 2,
    name: "otherIncome",
    type: "Income",
    subType: "Income"
  },
];

export const Other = [
  {
    id: 1,
    name: "Outgoing Transfer",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 2,
    name: "Incoming Transfer",
    type: "Income",
    subType: "Income"
  },
];

export const Categories = [
  {
    id: 1,
    name: "Required Expense",
    data: RequiredExpense,
  },
  {
    id: 2,
    name: "Up & Corners",
    data: UpAndCorners,
  },
  {
    id: 3,
    name: "Fun & Relax",
    data: FunAndRelax,
  },
  {
    id: 4,
    name: "Investing & Debt Payments",
    data: InvestingAndDebtPayments,
  },
  {
    id: 5,
    name: "Income",
    data: Income,
  },
  {
    id: 6,
    name: "Other",
    data: Other,
  },
];

export const EntireCategrories = [
  ...RequiredExpense,
  ...UpAndCorners,
  ...FunAndRelax,
  ...InvestingAndDebtPayments,
  ...Income,
  ...Other
];
