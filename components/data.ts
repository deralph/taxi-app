export type loc = {
  id?: number | string;
  location: string;
  price: string;
  time: string;
};

export const locations: loc[] = [
  { id: 1, location: "senate builing", price: "100", time: "15" },
  { id: 2, location: "Faculty of Arts", price: "100", time: "15" },
  { id: 3, location: "Faculty of education", price: "100", time: "15" },
  { id: 4, location: "Awo Hall", price: "100", time: "15" },
  { id: 5, location: "30 CQ", price: "100", time: "15" },
  { id: 6, location: "Quadrangle", price: "100", time: "15" },
  { id: 7, location: "Intercon", price: "100", time: "15" },
  { id: 8, location: "ETF 750", price: "100", time: "15" },
];
