import { SignIn } from "@clerk/nextjs";

export default function SignInLayout({ children }) {
  return (
    <main>
      {children}
      <SignIn/>
    </main>
  );
}
