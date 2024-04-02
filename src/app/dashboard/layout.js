import SidebarComponent from '@/components/sidebar'
export const metadata = {
  title: 'Dashboard'
}

export default function DashboardLayout({ children }) {
  return (
    <section>
      <div className='flex flex-row'>
        <SidebarComponent />
        <div className='flex-1 ml-64 p-5 w-full'>{children}</div>
      </div>
    </section>
  )
}
