import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p className="font-bold text-3xl mb-4">Welcome to the Dashboard!</p>
      <p>Dashboard Tadaaa.........</p>

      <Link to="/blogs" className=" text-blue-700">
        {" "}
        View Blogs
      </Link>
    </div>
  );
};

export default Dashboard;
