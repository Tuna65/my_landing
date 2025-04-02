// rom "react";
// import { useRouter } from "next/navigation";
// import Button from "@/components/Button";
// import Modal from "@/components/Modal";
// import Input from "@/components/Input";
// import { FaFacebook } from "react-icons/fa";
// import Text from "@/components/Text";
// import FacebookLoginButton from "@/components/FacebookLoginButton";

// const Lo
//   const roLogin = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Xử lý đăng nhập với email/password
//     console.log("Login with:", formData);
//   };

//   const handleFacebookSuccess = (response: any) => {
//     console.log("Facebook login success:", response);
//     // Xử lý đăng nhập thành công với Facebook
//   };

//   const handleFacebookFailure = (error: any) => {
//     console.error("Facebook login failed:", error);
//     // Xử lý lỗi đăng nhập Facebook
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
//             Đăng nhập vào tài khoản
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <Input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email"
//                 required
//                 showSearchIcon={false}
//               />
//             </div>
//             <div>
//               <Input
//                 type="pas           name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Mật khẩu"
//                 required
//                 showSearchIcon={false}
//               />
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="text-sm">
//               <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
//                 Quên mật khẩu?
//               </a>
//             </div>
//             <div className="text-sm">
//               <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:te     Đăng ký
//               </a>
//             </div>
//           </div>

//           <div>
//             <Button type="primary" className="w-full">
//               Đăng nhập
//             </Button>
//           </div>
//         </form>

//         <div className="mt-6">
//           <div className="relative">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400">
//                 Hoặc tiếp tục với
//               </span>
//             </div>
//           </div>

//           <div className="mt-6">
//             <FacebookLoginButton
//               onSuccess={handleFacebookSuccess}
//               onFailure={handleFacebookFailure}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
