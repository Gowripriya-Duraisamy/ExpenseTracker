export const RequiredExpense = [
  {
    id: 1,
    name: "Food & Beverage",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 2,
    name: "Transportation",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 3,
    name: "Rentals",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 4,
    name: "Water Bill",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 5,
    name: "Phone Bill",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 6,
    name: "Electricity Bill",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 7,
    name: "Gas Bill",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 8,
    name: "Internet Bill",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 9,
    name: "Television Bill",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 10,
    name: "Other utility Bills",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
];

export const UpAndCorners = [
  {
    id: 1,
    name: "Home Maintenance",
    image: "/static/home.png",
    type: "Expense",
    subType: "Expense",
    
  },
  {
    id: 2,
    name: "Vechicle Maintenance",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 3,
    name: "Medical Check Up",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 4,
    name: "Insurances",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 5,
    name: "Houseware",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 6,
    name: "Education",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 7,
    name: "Personal Items",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 8,
    name: "Pets",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 9,
    name: "Home Services",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 10,
    name: "Other Expenses",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
];

export const InvestingAndDebtPayments = [
  {
    id: 1,
    name: "Investment",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 2,
    name: "Debt Collection",
    image: "",
    type: "Income",
    subType: "Debt/Loan"
  },
  {
    id: 3,
    name: "Debt",
    image: "",
    type: "Income",
    subType: "Debt/Loan"
  },
  {
    id: 4,
    name: "Loan",
    image: "",
    type: "Expense",
    subType: "Debt/Loan"
  },
  {
    id: 5,
    name: "Repayment",
    image: "",
    type: "Expense",
    subType: "Debt/Loan"
  },
  {
    id: 6,
    name: "Pay Interest",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 7,
    name: "Collect Interest",
    image: "",
    type: "Income",
    subType: "Income"
  },
];

export const FunAndRelax = [
  {
    id: 1,
    name: "Fitness",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 2,
    name: "Makeup",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 3,
    name: "Gifts & Donations",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 4,
    name: "Streaming Services",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 5,
    name: "Fun money",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
];

export const Income = [
  {
    id: 1,
    name: "Salary",
    image: "",
    type: "Income",
    subType: "Income"
  },
  {
    id: 2,
    name: "otherIncome",
    image: "",
    type: "Income",
    subType: "Income"
  },
];

export const Other = [
  {
    id: 1,
    name: "Outgoing Transfer",
    image: "",
    type: "Expense",
    subType: "Expense"
  },
  {
    id: 2,
    name: "Incoming Transfer",
    image: "",
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
