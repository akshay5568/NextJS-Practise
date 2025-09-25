import Dashboard from "../../../../../components/Dashboard";

const ProfileNameLayout = ({ children }) => {
  return (
    <div className="w-full">
      <Dashboard />
      {children} 
    </div>
  );
};

export default ProfileNameLayout;
