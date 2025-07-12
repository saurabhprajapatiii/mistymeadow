
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration
    try {
      // In a real app, this would be an API call to your authentication service
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful registration
      toast({
        title: "Account created",
        description: "You have successfully registered. Please sign in now.",
      });
      
      navigate("/signin");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold font-playfair tracking-tight text-perfume-black">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-medium text-perfume-accent hover:text-perfume-accent-dark"
              >
                Sign in
              </Link>
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-perfume-accent focus:outline-none focus:ring-perfume-accent sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-perfume-accent focus:outline-none focus:ring-perfume-accent sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-perfume-accent focus:outline-none focus:ring-perfume-accent sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-perfume-accent focus:outline-none focus:ring-perfume-accent sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 text-perfume-accent focus:ring-perfume-accent"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-900"
              >
                I agree to the{" "}
                <a href="#" className="text-perfume-accent hover:text-perfume-accent-dark">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-perfume-accent hover:text-perfume-accent-dark">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div>
              <Button
                type="submit"
                className="group relative flex w-full justify-center bg-perfume-black hover:bg-perfume-accent"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Sign up"}
              </Button>
            </div>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                <span className="sr-only">Sign up with Google</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 c0-3.331,2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                </svg>
              </button>

              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                <span className="sr-only">Sign up with Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </button>

              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                <span className="sr-only">Sign up with Apple</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.146 0.146c-0.316 0.028-0.701 0.129-0.998 0.256-0.613 0.256-1.082 0.725-1.338 1.338-0.129 0.297-0.228 0.683-0.256 0.998-0.014 0.144-0.028 0.27-0.028 0.27s0.126-0.014 0.27-0.028c0.316-0.028 0.701-0.128 0.998-0.256 0.613-0.256 1.082-0.726 1.338-1.338 0.129-0.297 0.229-0.683 0.256-0.998 0.014-0.144 0.028-0.27 0.028-0.27s-0.126 0.014-0.27 0.028zM8.287 2.358c-0.141 0.085-0.27 0.198-0.384 0.312-0.512 0.512-0.771 1.238-0.698 1.964 0.57 0.853 0.269 1.721 0.641 2.401 0.199 0.341 0.455 0.667 0.739 0.952 0.285 0.284 0.611 0.54 0.952 0.739 0.398 0.227 0.796 0.369 1.225 0.511 0.114-0.085 0.17-0.199 0.227-0.312 0.141-0.384 0.17-0.796 0.085-1.238-0.085-0.384-0.256-0.711-0.497-1.011-0.171-0.171-0.341-0.341-0.512-0.497-0.171-0.171-0.341-0.341-0.497-0.512-0.313-0.341-0.569-0.768-0.697-1.196-0.085-0.284-0.114-0.582-0.128-0.896-0.341-0.312-0.711-0.583-1.139-0.753-0.085-0.057-0.199-0.085-0.313-0.142-0.001-0.171-0.001-0.171-0.001-0.342-0.172 0-0.172 0-0.344-0.001zM17.999 6.92c-0.796-0.739-1.877-1.18-2.988-1.18-0.14 0-0.285 0.014-0.426 0.029-0.085 0-0.17 0.014-0.256 0.028-0.369 0.056-0.725 0.157-1.066 0.312-0.014 0.014-0.028 0.014-0.042 0.014-0.483 0.199-0.895 0.483-1.266 0.838-0.028 0.028-0.042 0.057-0.07 0.085-0.513 0.498-0.912 1.123-1.181 1.833-0.014 0.028-0.028 0.056-0.028 0.085-0.156 0.412-0.256 0.838-0.313 1.28-0.014 0.127-0.014 0.241-0.014 0.368 0 0.142 0.014 0.284 0.028 0.425 0.014 0.099 0.028 0.199 0.057 0.299-0.213 0.057-0.441 0.085-0.654 0.17-0.613 0.213-1.153 0.582-1.608 1.039-0.028 0.028-0.042 0.057-0.071 0.085-0.553 0.555-0.895 1.295-0.978 2.077-0.014 0.114-0.028 0.227-0.028 0.341 0 0.085 0 0.171 0.014 0.256 0.028 0.356 0.113 0.697 0.241 1.025 0.299 0.753 0.825 1.408 1.479 1.835 0.17 0.114 0.341 0.213 0.527 0.299-0.199 0.582-0.398 1.152-0.583 1.736-0.611 1.876-1.223 3.753-1.835 5.629h7.063c0.028-0.085 0.057-0.17 0.085-0.256 0.412-1.207 0.825-2.415 1.237-3.624 0.369-1.067 0.727-2.147 1.097-3.214 0.042-0.113 0.07-0.228 0.113-0.341 0.384-1.152 0.782-2.301 1.166-3.453 0.014-0.028 0.014-0.056 0.028-0.085 0.056-0.17 0.114-0.341 0.17-0.511 0.214-0.641 0.428-1.266 0.627-1.906 0.256-0.824 0.37-1.691 0.313-2.543-0.142-2.061-1.224-3.98-2.929-5.218zM16.932 17.537c-0.186 0.553-0.37 1.108-0.557 1.662-0.397 1.18-0.795 2.359-1.193 3.552-0.028 0.086-0.071 0.158-0.085 0.256h-5.784c0.113-0.355 0.228-0.711 0.341-1.053 0.255-0.767 0.511-1.521 0.767-2.288 0.34-1.025 0.683-2.061 1.024-3.087 0.028-0.084 0.057-0.17 0.085-0.255 0.014-0.028 0.014-0.057 0.028-0.085 0.057-0.171 0.114-0.327 0.17-0.498 0.2-0.581 0.399-1.166 0.598-1.748 0.129-0.384 0.27-0.782 0.398-1.166 1.479-0.114 2.802-0.895 3.61-2.104 0.313 0.17 0.626 0.356 0.925 0.554 0.128 0.085 0.255 0.17 0.369 0.256 0.598 0.454 1.111 0.994 1.566 1.592 0.17 0.213 0.313 0.439 0.455 0.668 0.184 0.313 0.355 0.653 0.483 0.993 0.85 0.242 0.157 0.497 0.199 0.753 0.042 0.241 0.071 0.483 0.071 0.725 0 0.143-0.014 0.285-0.028 0.427-0.014 0.128-0.028 0.27-0.057 0.398-0.17 0.796-0.511 1.521-0.938 2.175-0.142 0.199-0.299 0.397-0.469 0.582-0.441 0.483-0.952 0.896-1.507 1.223-0.171 0.099-0.341 0.185-0.513 0.256-0.199 0.085-0.398 0.157-0.611 0.228-0.114 0.028-0.214 0.057-0.327 0.071-0.143 0.028-0.285 0.042-0.427 0.056-0.084 0.014-0.184 0.014-0.269 0.014-0.070 0.001-0.142 0.001-0.213 0.001-0.113 0-0.241-0.014-0.354-0.028-0.129-0.014-0.242-0.028-0.37-0.056-0.128-0.029-0.241-0.057-0.369-0.099z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
