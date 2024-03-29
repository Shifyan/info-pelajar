import SidebarComponent from '@/components/sidebar'
export const metadata = {
  title: 'Dashboard'
}

export default function DashboardLayout({ children }) {
  return (
    <section>
      <div className='flex flex-row'>
        <SidebarComponent />
        {children}
      </div>
    </section>
  )
}
