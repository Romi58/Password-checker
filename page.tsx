import PasswordStrengthChecker from "@/components/password-strength-checker"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Password Strength Checker</h1>
          <PasswordStrengthChecker />
        </div>
        <p className="text-center mt-4 text-sm text-gray-500">Create a strong password to keep your account secure</p>
      </div>
    </main>
  )
}
