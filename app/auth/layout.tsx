
function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600 to-red-950">
            {children}
        </div>
    )
}

export default AuthLayout
