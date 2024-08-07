import DashboardHeader from "./components/ui/DashboardHeader"
import DashboardContent from './components/ui/DashboardContent';
import DashboardSider from "./components/ui/DashboardSider"
import { Layout } from "antd";


const App = () => {
  return (
    <Layout>
       <DashboardHeader />
      <Layout>
        <div>
        <DashboardSider />
        </div>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <DashboardContent />
        </Layout>


      </Layout>
    </Layout>
  );
};
export default App;