

export type UserModel = {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  education: Education;


  email: string;
  guarantor: Guarantor;

  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  profile: Profile;
  socials: Socials;
  userName: string;
}

type Socials = {
  facebook: string;
  instagram: string;
  twitter: string;
};
type Profile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  bvn: string;
  currency: string;
  address: string;
  gender: string;
};
type Guarantor = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;

};
type Education = {
  level: string;
  employmentStatus: string;
  duration: string;
  loanRepayment: string;
  monthlyIncome: string[];
  officeEmail: string;
  sector: string;
};

export const getFullName = (userName: string) => {
  return userName.split('.')[0] +
    ' ' +
    userName.split('.')[1]
}

export const getCurrencyString = (amount: string) => {
  return Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    // minimumFractionDigits: 0,
    // maximumFractionDigits: 0,
  }).format(Number(amount))
}