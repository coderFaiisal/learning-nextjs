import DashboardLayout from "../../components/Layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <div>
      <h1>This is dashboard page...</h1>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
