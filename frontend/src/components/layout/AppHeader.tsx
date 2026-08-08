import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, type MenuProps } from "antd";

const userMenu: MenuProps["items"] = [
  {
    key: "profile",
    icon: <UserOutlined />,
    label: "Profile",
  },
  {
    key: "settings",
    icon: <SettingOutlined />,
    label: "Settings",
  },
  {
    type: "divider",
  },
  {
    key: "logout",
    icon: <LogoutOutlined />,
    label: "Logout",
  },
];

function AppHeader() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-10">
      <div>
        <p className="text-sm text-slate-400">Personal Finance</p>

        <h1 className="text-lg font-bold text-slate-900">Dashboard</h1>
      </div>

      <Dropdown menu={{ items: userMenu }} trigger={["click"]}>
        <button className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-slate-50">
          <Avatar className="bg-indigo-100! text-indigo-600!">A</Avatar>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold">Alex Morgan</p>

            <p className="text-xs text-slate-400">Personal account</p>
          </div>
        </button>
      </Dropdown>
    </header>
  );
}

export default AppHeader;
