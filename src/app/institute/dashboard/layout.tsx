import Dashboard from "@/lib/components/dashboard/Dashboard"


function InstituteDashboardLayout({children}:Readonly<{children : React.ReactNode}>){
    return(
        <Dashboard>
            {children}
        </Dashboard>
    )
}


export default InstituteDashboardLayout