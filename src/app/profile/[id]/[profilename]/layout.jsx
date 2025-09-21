import Dashboard from "@/components/Dashboard";

const ProfileNameLayout = ({ children }) => {
  return (
    <div>
      <Dashboard />
      {children} 
    </div>
  );
};

export default ProfileNameLayout;
