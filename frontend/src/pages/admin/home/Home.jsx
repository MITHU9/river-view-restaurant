import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Users, ShoppingCart, DollarSign, BarChart3 } from "lucide-react";

const stats = [
  {
    label: "Total Sales",
    value: "$12,450",
    icon: DollarSign,
    color: "bg-green-100 text-green-700",
  },
  {
    label: "Orders",
    value: "320",
    icon: ShoppingCart,
    color: "bg-blue-100 text-blue-700",
  },
  {
    label: "Customers",
    value: "1,200",
    icon: Users,
    color: "bg-purple-100 text-purple-700",
  },
  {
    label: "Revenue",
    value: "$9,200",
    icon: BarChart3,
    color: "bg-yellow-100 text-yellow-700",
  },
];

const lineData = [
  { name: "Jan", orders: 200 },
  { name: "Feb", orders: 240 },
  { name: "Mar", orders: 220 },
  { name: "Apr", orders: 278 },
  { name: "May", orders: 189 },
];

const pieData = [
  { name: "Vegetarian", value: 400 },
  { name: "Non-Vegetarian", value: 300 },
  { name: "Vegan", value: 100 },
];

const COLORS = ["#34D399", "#60A5FA", "#FBBF24"];

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-8 min-h-screen">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="p-4 bg-white/10 rounded-2xl shadow flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-xl font-semibold">{value}</p>
            </div>
            <div className={`p-2 rounded-full ${color}`}>
              <Icon className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <div className="bg-white/10 rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Monthly Orders</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <Line type="monotone" dataKey="orders" stroke="#34D399" />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white/10 rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">
            Menu Category Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name }) => name}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
