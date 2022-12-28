import logo from './logo.svg';
import './App.css';
import { Button, Form, Input, Tabs } from 'antd';
import 'antd/dist/reset.css';
import Form1 from './components/Form1';
import TokenForm from './components/TokenForm';


function App() {

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <Tabs
    defaultActiveKey="2"
    onChange={onChange}
    items={[
      {
        label: `Tab 1`,
        key: '1',
        children: <Form1/>,
      },
      {
        label: `Tab 2`,
        key: '2',
        children: <TokenForm/>,
      },
      {
        label: `Tab 3`,
        key: '3',
        children: `Content of Tab Pane 3`,
      },
    ]}
  />
     
    </div>
  );
}

export default App;
