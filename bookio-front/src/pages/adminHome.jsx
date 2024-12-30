import React from 'react';
import { DollarSign, Users, BarChart3, PieChart } from 'lucide-react';
import StatCard from '../components/Statcharts';
import SalesChart from '../components/SellesCharts';
import TrafficSource from '../components/TrafficSource';
import CustomersTable from '../components/CustomTable/CustomersTable'
import TableRow from "../components/CustomTable/TableRow"

function AdminHome() {      
  return (
    <div className="min-h-screen bg-gray-100">
     
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="BUDGET"
            value="$24k"
            change={{ value: 12, label: "Since last month" }}
            Icon={DollarSign}
            iconColor="bg-indigo-500"
          />
          <StatCard
            title="TOTAL CUSTOMERS"
            value="1.6k"
            change={{ value: -16, label: "Since last month" }}
            Icon={Users}
            iconColor="bg-emerald-500"
          />
          <StatCard
            title="TASK PROGRESS"
            value="75.5%"
            change={{ value: 5, label: "Since last week" }}
            Icon={BarChart3}
            iconColor="bg-orange-500"
          />
          <StatCard
            title="TOTAL PROFIT"
            value="$15k"
            change={{ value: 8, label: "Since last month" }}
            Icon={PieChart}
            iconColor="bg-indigo-500"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div>
            <TrafficSource />
          </div>
        </div>
        <CustomersTable />
        <TableRow/>
      </div>
    </div>
  );
}

export default AdminHome;