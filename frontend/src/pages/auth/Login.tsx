import { Button, Form, Input, message } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { authService } from "../../services/auth.service";
import { useNavigate } from "react-router";
import { useEffect } from "react";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken) {
      navigate("/dashboard", { replace: true });
    }
  }, [accessToken, navigate]);
  const onFinish = async (values: LoginFormValues) => {
    try {
      const result = await authService.login(values);
      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);
      localStorage.setItem("user", JSON.stringify(result.user));

      message.success("Welcome back!");
      navigate("/dashboard");
    } catch (error) {
      message.error("Email or password is incorrect.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Brand */}
        <section className="relative hidden overflow-hidden lg:flex">
          <div className="absolute inset-0 bg-linear-to-br from-indigo-600 via-violet-600 to-slate-950" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 text-white">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg font-bold backdrop-blur">
                  M
                </div>

                <span className="text-xl font-semibold tracking-tight">
                  MoneyFlow
                </span>
              </div>

              <div className="max-w-lg pt-20">
                <h1 className="text-5xl font-bold leading-tight tracking-tight">
                  Take control of
                  <span className="block text-indigo-200">your finances.</span>
                </h1>

                <p className="mt-6 max-w-md text-lg leading-8 text-white/70">
                  Track your income, expenses and accounts in one simple
                  financial dashboard.
                </p>
              </div>
            </div>

            <p className="text-sm text-white/50">
              Personal finance, simplified.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <div className="mb-6 flex items-center gap-3 lg:hidden">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
                  M
                </div>

                <span className="text-xl font-semibold text-slate-900">
                  MoneyFlow
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Welcome back
              </h2>

              <p className="mt-2 text-slate-500">
                Sign in to continue to your dashboard.
              </p>
            </div>

            <Form<LoginFormValues>
              layout="vertical"
              size="large"
              onFinish={onFinish}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="you@example.com"
                  className="rounded-xl!"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="••••••••"
                  className="rounded-xl!"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                block
                className="mt-2! h-12! rounded-xl! bg-indigo-600! font-medium!"
              >
                Sign in
              </Button>
            </Form>

            <p className="mt-8 text-center text-sm text-slate-400">
              MoneyFlow · Personal Finance Tracker
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
